// Octagon Security — SEO constants (paths, slugs, legacy redirects)
window.OS_SEO = {
  site: 'https://www.octagonsecured.com',
  phone: '786-928-0986',
  phoneTel: '+1-786-928-0986',
  license: 'EF0000848',
  ogImage: '/assets/hero-og.png',

  services: [
    { slug: 'home-security',       label: 'Home & Business Security',        path: '/services/home-security/' },
    { slug: 'cameras',             label: 'Security Cameras & Surveillance', path: '/services/cameras/' },
    { slug: 'burglar-alarm',       label: 'Burglar Alarms & Monitoring',     path: '/services/burglar-alarm/' },
    { slug: 'fire-alarm',          label: 'Fire Alarm Systems',              path: '/services/fire-alarm/' },
    { slug: 'access-control',      label: 'Access Control & Keyless Entry',  path: '/services/access-control/' },
    { slug: 'structured-cabling',  label: 'Structured Cabling',              path: '/services/structured-cabling/' },
    { slug: 'warehouse',           label: 'Warehouse & Industrial Security', path: '/services/warehouse/' },
  ],

  siteRoot() {
    if (window.OS_SITE_ROOT != null) return window.OS_SITE_ROOT;
    const path = window.location.pathname;
    const svcIdx = path.indexOf('/services/');
    if (svcIdx >= 0) return path.slice(0, svcIdx);
    if (path.includes('/about')) return path.replace(/\/?about(\/index\.html?)?\/?$/, '');
    if (path.includes('/privacy')) return path.replace(/\/?privacy(\/index\.html?)?\/?$/, '');
    if (path.includes('/terms')) return path.replace(/\/?terms(\/index\.html?)?\/?$/, '');
    const cleaned = path.replace(/\/index\.html?$/, '').replace(/\/$/, '');
    return cleaned === '' ? '' : cleaned;
  },

  servicePath(slug) {
    const s = this.services.find(x => x.slug === slug);
    const rel = s ? s.path : '/services/home-security/';
    return this.siteRoot() + rel;
  },
};
