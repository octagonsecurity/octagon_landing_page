#!/usr/bin/env node
/**
 * Adds quick-answer crawl text and richer service schema to generated service pages.
 * Run from repo root after scripts/generate-seo.mjs.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const WEB = join(ROOT, 'ui_kits/website');
const SITE = 'https://www.octagonsecured.com';
const PHONE = '+1-786-928-0986';

function readWindowObject(file, name) {
  const src = readFileSync(join(WEB, file), 'utf8');
  const match = src.match(new RegExp(`window\\.${name}\\s*=\\s*([\\s\\S]*?);\\s*$`));
  if (!match) throw new Error(`Could not parse ${name} from ${file}`);
  return eval('(' + match[1] + ')');
}

const services = readWindowObject('service-data.js', 'OS_SERVICES_DATA');
const answers = readWindowObject('service-answers.js', 'OS_SERVICE_ANSWERS');

function esc(s) {
  return String(s || '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

function serviceAreas(svc) {
  const base = ['Miami-Dade County, FL', 'Broward County, FL', 'Palm Beach County, FL'];
  const names = svc.location && !/south florida/i.test(svc.location)
    ? [svc.location, ...base]
    : base;
  return [...new Set(names)].map(name => ({ '@type': 'AdministrativeArea', name }));
}

function imageUrl(svc) {
  return `${SITE}${svc.image.replace('../../assets', '/assets')}`;
}

function offerCatalog(svc) {
  const itemListElement = (svc.features || []).map((feature, i) => ({
    '@type': 'Offer',
    position: i + 1,
    itemOffered: {
      '@type': 'Service',
      name: feature.title,
      description: feature.note || (feature.bullets || []).join(', '),
    },
  }));
  return {
    '@type': 'OfferCatalog',
    name: `${svc.title} service options`,
    itemListElement,
  };
}

function qaEntities(svc, answerData) {
  const seen = new Set();
  return [...(answerData.quick || []), ...(svc.faqs || [])]
    .filter(item => item?.q && item?.a && !seen.has(item.q) && seen.add(item.q))
    .map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }));
}

function webPageSchema(slug, svc) {
  const path = `/services/${slug}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE}${path}#webpage`,
    url: `${SITE}${path}`,
    name: svc.title,
    description: svc.intro,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      name: 'Octagon Security',
      url: `${SITE}/`,
    },
    about: { '@id': `${SITE}${path}#service` },
    mainEntity: { '@id': `${SITE}${path}#service` },
  };
}

function scriptTag(schema) {
  return `  <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`;
}

function enrichServiceSchema(schema, slug, svc, answerData) {
  const path = `/services/${slug}/`;
  return {
    ...schema,
    '@id': `${SITE}${path}#service`,
    serviceType: answerData.serviceType || svc.title,
    category: answerData.category || 'Security system installation',
    image: imageUrl(svc),
    areaServed: serviceAreas(svc),
    providerMobility: 'dynamic',
    mainEntityOfPage: { '@id': `${SITE}${path}#webpage` },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE}${path}`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: PHONE,
        contactType: 'sales',
        areaServed: 'South Florida',
      },
    },
    hasOfferCatalog: offerCatalog(svc),
  };
}

function enhanceSchema(html, slug, svc, answerData) {
  let sawWebPage = false;
  html = html.replace(/  <script type="application\/ld\+json">\n([\s\S]*?)\n  <\/script>/g, (full, json) => {
    let schema;
    try { schema = JSON.parse(json); }
    catch { return full; }

    if (schema['@type'] === 'Service') {
      schema = enrichServiceSchema(schema, slug, svc, answerData);
    }
    if (schema['@type'] === 'FAQPage') {
      schema.mainEntity = qaEntities(svc, answerData);
    }
    if (schema['@type'] === 'WebPage') sawWebPage = true;
    return scriptTag(schema);
  });

  if (!sawWebPage) {
    html = html.replace(
      /\n  <link rel="stylesheet" href="\.\.\/\.\.\/\.\.\/styles\.css">/,
      `\n${scriptTag(webPageSchema(slug, svc))}\n  <link rel="stylesheet" href="../../../styles.css">`
    );
  }

  return html;
}

function answerBlock(answerData) {
  const quick = answerData.quick || [];
  if (!quick.length) return '';
  const items = quick.map(item => `        <dt>${esc(item.q)}</dt><dd>${esc(item.a)}</dd>`).join('\n');
  return `      <section aria-labelledby="quick-answers-heading">\n        <h2 id="quick-answers-heading">Quick Answers</h2>\n        <dl>\n${items}\n        </dl>\n      </section>`;
}

function injectNoscriptAnswers(html, answerData) {
  if (html.includes('quick-answers-heading')) return html;
  const block = answerBlock(answerData);
  if (!block) return html;
  if (html.includes('      <dl>\n')) return html.replace('      <dl>\n', `${block}\n      <dl>\n`);
  return html.replace('      <p>Call <a href="tel:786-928-0986">', `${block}\n      <p>Call <a href="tel:786-928-0986">`);
}

function injectAnswerScript(html) {
  if (html.includes('service-answers.js')) return html;
  return html.replace(
    '  <script src="../../service-data.js"></script>',
    '  <script src="../../service-data.js"></script>\n  <script src="../../service-answers.js"></script>'
  );
}

for (const [slug, svc] of Object.entries(services)) {
  const answerData = answers[slug] || {};
  const file = join(WEB, 'services', slug, 'index.html');
  let html = readFileSync(file, 'utf8');
  html = enhanceSchema(html, slug, svc, answerData);
  html = injectNoscriptAnswers(html, answerData);
  html = injectAnswerScript(html);
  writeFileSync(file, html);
  console.log('Enhanced service SEO', slug);
}
