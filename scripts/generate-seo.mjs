#!/usr/bin/env node
/**
 * Generates service pages with static SEO head + noscript content.
 * Run from repo root: node scripts/generate-seo.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE = 'https://www.octagonsecured.com';
const WEB = join(ROOT, 'ui_kits/website');

const serviceDataSrc = readFileSync(join(WEB, 'service-data.js'), 'utf8');
const dataMatch = serviceDataSrc.match(/window\.OS_SERVICES_DATA\s*=\s*(\{[\s\S]*\});/);
if (!dataMatch) throw new Error('Could not parse service-data.js');
const services = eval('(' + dataMatch[1] + ')');

const SLUG_META = {
  'home-security': {
    description: 'Professional home & business security system installation in Miami-Dade, Broward & Palm Beach. Cameras, alarms, fire, access control & cabling. Free estimates.',
    ogImage: '/assets/svc-home-business.png',
    legacy: ['/home-and-business-security-system-installation', '/security-system-installation-miami'],
  },
  cameras: {
    description: 'Security camera installation & video surveillance in South Florida. HD/4K cameras, remote access, night vision & clean installs. Octagon Security — 786-928-0986.',
    ogImage: '/assets/svc-cameras.png',
    legacy: ['/smart-security-cameras-and-video-surveillance-systems'],
  },
  'burglar-alarm': {
    description: 'Burglar alarm installation & 24/7 monitoring in South Florida. Intrusion detection, mobile alerts & fast response. Licensed & insured. Free estimates.',
    ogImage: '/assets/svc-burglar-alarm.png',
    legacy: ['/burglar-alarm-installation-and-intrusion-detection'],
  },
  'fire-alarm': {
    description: 'Fire alarm installation, testing & inspections in Miami-Dade, Broward & Palm Beach. Code-compliant systems with 24/7 monitoring. FL License EF0000848.',
    ogImage: '/assets/svc-smoke.png',
    legacy: ['/fire-alarm-systems-and-smoke-detection-installation'],
  },
  'access-control': {
    description: 'Access control & keyless entry systems in South Florida. Keycards, mobile credentials, biometrics & audit logs. Professional installation & support.',
    ogImage: '/assets/svc-access.png',
    legacy: ['/access-control-systems-and-keyless-entry-solutions', '/access-control-faq'],
  },
  'structured-cabling': {
    description: 'Structured cabling & network infrastructure in South Florida. CAT6, fiber, data drops, patch panels & wireless AP cabling for offices and warehouses.',
    ogImage: '/assets/team-ladders.png',
    legacy: ['/structured-cabling', '/structured-cabling-faq'],
  },
  warehouse: {
    description: 'Warehouse security systems in Miami-Dade. Video surveillance, access control, burglar alarms & structured cabling for distribution centers & industrial facilities.',
    ogImage: '/assets/svc-warehouse.png',
    legacy: ['/warehouse-security-systems-in-miami-dade'],
  },
};

function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE}/#business`,
    name: 'Octagon Security',
    url: `${SITE}/`,
    telephone: '+1-786-928-0986',
    image: `${SITE}/assets/hero-og.png`,
    logo: `${SITE}/assets/logo-full.png`,
    description: 'Commercial and residential security systems installed across Miami-Dade, Broward and Palm Beach — cameras, alarms, fire, access control and structured cabling.',
    priceRange: '$$',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Miami-Dade County, FL' },
      { '@type': 'AdministrativeArea', name: 'Broward County, FL' },
      { '@type': 'AdministrativeArea', name: 'Palm Beach County, FL' },
    ],
    geo: { '@type': 'GeoCoordinates', latitude: 26.139327, longitude: -80.269756 },
    sameAs: [
      'https://instagram.com/octagonsecurityllc',
      'https://www.facebook.com/share/1Cb8X6MGRq/',
      'https://yelp.com/biz/octagon-security-kendall',
      'https://www.google.com/maps/place/Octagon+Security/@26.139327,-80.269756',
    ],
    hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'FL License EF0000848' },
  };
}

function faqSchema(faqs) {
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

function serviceSchema(svc, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.intro,
    provider: { '@id': `${SITE}/#business` },
    areaServed: { '@type': 'AdministrativeArea', name: svc.location || 'South Florida' },
    url: `${SITE}${path}`,
  };
}

function breadcrumbs(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

function headBlock({ title, description, canonical, ogImage, schemas }) {
  const og = `${SITE}${ogImage || '/assets/hero-og.png'}`;
  const schemaScripts = schemas
    .filter(Boolean)
    .map(s => `  <script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n  </script>`)
    .join('\n');
  return `  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description.replace(/"/g, '&quot;')}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Octagon Security">
  <meta property="og:title" content="${title.replace(/"/g, '&quot;')}">
  <meta property="og:description" content="${description.replace(/"/g, '&quot;')}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${og}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}">
  <meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}">
  <meta name="twitter:image" content="${og}">
  <link rel="icon" type="image/png" href="../../../assets/rob-mascot.png">
  <link rel="apple-touch-icon" href="../../../assets/rob-mascot.png">
  <link rel="manifest" href="/manifest.json">
${schemaScripts}`;
}

function noscriptBlock(svc) {
  const faqHtml = (svc.faqs || [])
    .map(f => `      <dt>${f.q}</dt><dd>${f.a}</dd>`)
    .join('\n');
  return `  <noscript>
    <article>
      <h1>${svc.title}</h1>
      <p>${svc.hero_subtitle}</p>
      <p>${svc.intro}</p>
      ${svc.intro2 ? `<p>${svc.intro2}</p>` : ''}
      ${faqHtml ? `<dl>\n${faqHtml}\n      </dl>` : ''}
      <p>Call <a href="tel:786-928-0986">786-928-0986</a> for a free estimate.</p>
    </article>
  </noscript>`;
}

function servicePageHtml(slug, svc, meta) {
  const path = `/services/${slug}/`;
  const canonical = `${SITE}${path}`;
  const title = `${svc.title} | Octagon Security`;
  const schemas = [
    localBusiness(),
    serviceSchema(svc, path),
    breadcrumbs([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/#services' },
      { name: svc.title.split(' in ')[0].split(' — ')[0], path },
    ]),
    faqSchema(svc.faqs),
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
${headBlock({ title, description: meta.description, canonical, ogImage: meta.ogImage, schemas })}
  <link rel="stylesheet" href="../../../styles.css">
  <link rel="stylesheet" href="../../site.css">
  <style>
/* ---- Service page layout ---- */
.sv-hero{position:relative;color:#fff;overflow:hidden}
.sv-hero__bg{position:absolute;inset:0;background:url('../../../assets/team-table.webp') center 35%/cover no-repeat,url('../../../assets/team-table.png') center 35%/cover no-repeat}
.sv-hero__scrim{position:absolute;inset:0;background:linear-gradient(100deg,rgba(11,11,12,.90),rgba(11,11,12,.58))}
.sv-hero__inner{position:relative;padding-block:clamp(2.8rem,6.5vw,5.5rem)}
.sv-crumb{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-family:var(--font-heading);font-size:var(--text-xs);text-transform:uppercase;letter-spacing:.08em;color:var(--gray-400);margin-bottom:var(--space-4)}
.sv-crumb a{color:var(--gray-400)}.sv-crumb a:hover{color:#fff}.sv-crumb svg{width:13px;height:13px}
.sv-hero__eye{font-family:var(--font-heading);font-weight:700;text-transform:uppercase;letter-spacing:.14em;font-size:13px;color:var(--color-primary);display:flex;align-items:center;gap:8px;margin-bottom:var(--space-3)}
.sv-hero__eye::before{content:'';width:24px;height:3px;background:var(--color-primary);display:inline-block}
.sv-hero__h{font-family:var(--font-display);font-weight:800;text-transform:uppercase;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.97;letter-spacing:-.01em;color:#fff;margin:0 0 var(--space-4);overflow-wrap:break-word}
.sv-hero__sub{color:var(--gray-200);font-size:clamp(.95rem,1.3vw,1.1rem);line-height:1.6;max-width:54ch;margin:0 0 var(--space-6)}
.sv-hero__cta{display:flex;flex-wrap:wrap;gap:var(--space-4);align-items:center}
.sv-intro{padding-block:var(--section-pad-y)}
.sv-intro__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,6vw,5rem);align-items:center}
.sv-intro__copy{display:flex;flex-direction:column;gap:var(--space-5)}
.sv-intro__p{font-size:var(--text-lg);line-height:1.65;color:var(--text-body);margin:0}
.sv-intro__p2{font-size:var(--text-md);line-height:1.65;color:var(--text-body);margin:0}
.sv-intro__img{border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-lg);aspect-ratio:4/3;background:var(--gray-100)}
.sv-intro__img img{width:100%;height:100%;object-fit:cover;display:block}
.sv-intro__cta{display:flex;flex-wrap:wrap;gap:var(--space-4);align-items:center}
.sv-intro__phone{font-family:var(--font-heading);font-weight:700;font-size:var(--text-xl);color:var(--text-strong);display:inline-flex;align-items:center;gap:8px}
.sv-intro__phone svg{color:var(--color-primary);width:20px;height:20px}
.sv-intro__phone:hover{color:var(--color-primary);text-decoration:none}
.sv-features{background:var(--surface-concrete);padding-block:var(--section-pad-y)}
.sv-features__head{max-width:720px;margin:0 auto var(--space-8)}
.sv-features__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-5)}
.sv-feat{background:var(--surface-card);border:1px solid var(--border-default);border-top:3px solid var(--color-primary);border-radius:var(--radius-md);padding:var(--space-5);box-shadow:var(--shadow-sm)}
.sv-feat__title{font-family:var(--font-heading);font-weight:700;font-size:var(--text-lg);color:var(--text-strong);margin:0 0 var(--space-3);line-height:1.2}
.sv-feat__list{list-style:none;padding:0;margin:0 0 8px;display:flex;flex-direction:column;gap:6px}
.sv-feat__list li{font-size:var(--text-sm);color:var(--text-body);display:flex;align-items:flex-start;gap:8px;line-height:1.45}
.sv-feat__list li::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--color-primary);flex:none;margin-top:.4em}
.sv-feat__note{font-size:var(--text-xs);color:var(--text-muted);font-style:italic;margin:0;line-height:1.5}
.sv-benefits{padding-block:var(--section-pad-y)}
.sv-benefits__head{max-width:720px;margin:0 auto var(--space-8)}
.sv-benefits__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-5)}
.sv-benefit{display:flex;flex-direction:column;gap:var(--space-3)}
.sv-benefit__ic{width:54px;height:54px;display:grid;place-items:center;border-radius:var(--radius-md);background:var(--gray-900);color:#fff}
.sv-benefit__ic svg{width:26px;height:26px}
.sv-benefit__title{font-family:var(--font-heading);font-weight:700;font-size:var(--text-lg);color:var(--text-strong);margin:0}
.sv-benefit__rule{width:36px;height:3px;background:var(--color-primary);border:0;margin:0}
.sv-benefit__body{font-size:var(--text-sm);line-height:1.65;color:var(--text-body);margin:0}
.sv-closing{background:var(--gray-950);padding-block:var(--section-pad-y)}
.sv-closing__inner{display:grid;grid-template-columns:1fr auto;gap:var(--space-7);align-items:center}
.sv-closing__h{font-family:var(--font-heading);font-weight:700;font-size:var(--text-2xl);color:#fff;margin:0 0 var(--space-3);line-height:1.2}
.sv-closing__p{color:var(--gray-300);margin:0;font-size:var(--text-md);line-height:1.6;max-width:62ch}
.sv-closing__btns{display:flex;flex-direction:column;gap:var(--space-3);flex:none}
.sv-faq{padding-block:var(--section-pad-y);background:var(--surface-concrete)}
.sv-faq__head{max-width:720px;margin:0 auto var(--space-7)}
.sv-faq__list{max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:0}
.sv-faq__item{border-bottom:1px solid var(--border-default)}
.sv-faq__item:first-child{border-top:1px solid var(--border-default)}
.sv-faq__btn{width:100%;background:none;border:0;padding:var(--space-5) 0;display:flex;align-items:center;justify-content:space-between;gap:var(--space-4);cursor:pointer;text-align:left}
.sv-faq__q{font-family:var(--font-heading);font-weight:700;font-size:var(--text-md);color:var(--text-strong);margin:0;line-height:1.4}
.sv-faq__ic{width:28px;height:28px;flex:none;display:grid;place-items:center;border-radius:50%;background:var(--gray-100);color:var(--text-strong);transition:background var(--dur-fast),transform var(--dur-base)}
.sv-faq__item--open .sv-faq__ic{background:var(--color-primary);color:#fff;transform:rotate(45deg)}
.sv-faq__answer{overflow:hidden;max-height:0;transition:max-height .3s ease,padding .3s ease;padding:0}
.sv-faq__item--open .sv-faq__answer{padding-bottom:var(--space-5)}
.sv-faq__answer p{font-size:var(--text-md);line-height:1.65;color:var(--text-body);margin:0}
.sv-sidenav{padding-block:var(--section-pad-y);border-top:1px solid var(--border-default)}
.sv-sidenav__inner{display:flex;flex-direction:column;gap:var(--space-4)}
.sv-sidenav__label{font-family:var(--font-heading);font-weight:700;text-transform:uppercase;letter-spacing:.08em;font-size:var(--text-xs);color:var(--text-muted)}
.sv-sidenav__links{display:flex;flex-wrap:wrap;gap:var(--space-3)}
.sv-sidenav__link{font-family:var(--font-heading);font-weight:600;font-size:var(--text-sm);color:var(--text-body);padding:.5rem 1rem;border:1px solid var(--border-default);border-radius:var(--radius-md);transition:all var(--dur-fast)}
.sv-sidenav__link:hover,.sv-sidenav__link--active{background:var(--color-primary);color:#fff;border-color:var(--color-primary);text-decoration:none}
@media(max-width:900px){.sv-intro__grid{grid-template-columns:1fr}.sv-intro__img{order:-1;aspect-ratio:16/9}.sv-features__grid,.sv-benefits__grid{grid-template-columns:repeat(2,1fr)}.sv-closing__inner{grid-template-columns:1fr}.sv-closing__btns{flex-direction:row}}
@media(max-width:560px){.sv-features__grid,.sv-benefits__grid{grid-template-columns:1fr}.sv-feat,.sv-benefit,.sv-faq__q{min-width:0;overflow-wrap:break-word}}
  </style>
  <script>window.OS_SERVICE_SLUG='${slug}';window.OS_ASSET_PREFIX='../../../assets/';</script>
  <script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
  <script src="../../../_ds_bundle.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.460.0/dist/umd/lucide.min.js"></script>
  <script src="../../seo-config.js"></script>
  <script src="../../service-data.js"></script>
</head>
<body>
${noscriptBlock(svc)}
<div id="root"></div>
<script type="text/babel" src="../../Picture.jsx"></script>
<script type="text/babel" src="../../Header.jsx"></script>
<script type="text/babel" src="../../ContactForm.jsx"></script>
<script type="text/babel" src="../../Footer.jsx"></script>
<script type="text/babel" src="../../Services.jsx"></script>
<script type="text/babel" src="../../service-page.jsx"></script>
</body>
</html>
`;
}

// Generate service pages
for (const [slug, svc] of Object.entries(services)) {
  const meta = SLUG_META[slug];
  if (!meta) continue;
  const dir = join(WEB, 'services', slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), servicePageHtml(slug, svc, meta));
  console.log('Generated', slug);
}

// Generate sitemap
const urls = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about/', changefreq: 'monthly', priority: '0.8' },
  ...Object.keys(SLUG_META).map(slug => ({
    loc: `/services/${slug}/`,
    changefreq: 'monthly',
    priority: '0.9',
  })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(WEB, 'sitemap.xml'), sitemap);

// Generate _redirects
const redirects = [
  '/about-us /about/ 301',
  '/contact /#contact 301',
  '/reviews /#reviews 301',
  '/faqs /#services 301',
  '/gallery / 301',
  '/areas-we-serve / 301',
  '/broward / 301',
  '/service-area/* / 301',
  '/about.html /about/ 301',
  '/service.html /services/home-security/ 301',
  '/service.html?s=:slug /services/:slug/ 301',
  '/security-camera-faq /services/cameras/ 301',
  '/fire-alarm-faq /services/fire-alarm/ 301',
  '/burglar-alarm-faq /services/burglar-alarm/ 301',
];
for (const [slug, meta] of Object.entries(SLUG_META)) {
  for (const legacy of meta.legacy) {
    redirects.push(`${legacy} /services/${slug}/ 301`);
  }
  redirects.push(`/services/${slug} /services/${slug}/ 301`);
}
writeFileSync(join(WEB, '_redirects'), redirects.join('\n') + '\n');

// Generate .htaccess
const htaccess = `RewriteEngine On

# Legacy Duda pages
RewriteRule ^about-us/?$ /about/ [R=301,L]
RewriteRule ^contact/?$ /#contact [R=301,L,NE]
RewriteRule ^reviews/?$ /#reviews [R=301,L,NE]
RewriteRule ^about\\.html$ /about/ [R=301,L]
${Object.entries(SLUG_META).flatMap(([slug, meta]) =>
  meta.legacy.map(p => `RewriteRule ^${p.replace(/^\//, '').replace(/\/$/, '')}/?$ /services/${slug}/ [R=301,L]`)
).join('\n')}

# Query-param service URLs
RewriteCond %{QUERY_STRING} ^s=([a-z-]+)$
RewriteRule ^service\\.html$ /services/%1/ [R=301,L]
RewriteRule ^service\\.html$ /services/home-security/ [R=301,L]

# Trailing slash for service pages
${Object.keys(SLUG_META).map(slug =>
  `RewriteRule ^services/${slug}$ /services/${slug}/ [R=301,L]`
).join('\n')}
`;
writeFileSync(join(WEB, '.htaccess'), htaccess);

console.log('Done — sitemap.xml, _redirects, .htaccess written');
