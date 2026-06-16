/* Octagon Security — Website UI Kit · Footer */
const FtIc = window.OS_Ic;

const FT_SERVICES = (window.OS_SEO && window.OS_SEO.services) || [
  { slug: 'home-security', label: 'Home & Business Security' },
  { slug: 'cameras', label: 'Security Cameras & Surveillance' },
  { slug: 'burglar-alarm', label: 'Burglar Alarm Installation' },
  { slug: 'access-control', label: 'Access Control Systems' },
  { slug: 'fire-alarm', label: 'Fire Alarm Systems' },
  { slug: 'structured-cabling', label: 'Structured Cabling' },
];
const svcPath = (slug) => (window.OS_SEO && window.OS_SEO.servicePath(slug)) || `/services/${slug}/`;

const FT_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#contact' },
];

function Footer() {
  return (
    <footer className="os-footer">
      <div className="os-container os-footer__grid">
        <div className="os-footer__brand">
          <Picture className="os-footer__logo" src="/assets/logo-full.png" alt="Octagon Security" width="120" height="120" loading="lazy" decoding="async" />
          <p className="os-footer__tag">Get Octagon Secured.</p>
          <p className="os-footer__lic">FL License EF0000848 · ETL / UL Listed</p>
          <div className="os-footer__social">
            <a href="https://instagram.com/octagonsecurityllc" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="os-footer__soc"><FtIc n="instagram" /></a>
            <a href="https://www.facebook.com/share/1Cb8X6MGRq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="os-footer__soc"><FtIc n="facebook" /></a>
            <a href="https://yelp.com/biz/octagon-security-kendall" target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="os-footer__soc os-footer__soc--text">Yelp</a>
            <a href="https://www.google.com/maps/place/Octagon+Security/@26.139327,-80.269756,249770m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa381d5e2d395b453:0x2abe88d9761ffa3e!8m2!3d26.139327!4d-80.269756!16s%2Fg%2F11y511ns2n?entry=ttu" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews" className="os-footer__soc os-footer__soc--text">Google</a>
          </div>
        </div>
        <div className="os-footer__col">
          <h4>Services</h4>
          <span className="os-footer__rule" />
          <ul>{FT_SERVICES.map(s => <li key={s.slug}><a href={svcPath(s.slug)}>{s.label}</a></li>)}</ul>
        </div>
        <div className="os-footer__col">
          <h4>Quick Links</h4>
          <span className="os-footer__rule" />
          <ul>{FT_LINKS.map(s => <li key={s.label}><a href={s.href}>{s.label}</a></li>)}</ul>
        </div>
      </div>
      <div className="os-footer__bar">
        <div className="os-container os-footer__bar-inner">
          <span>© 2026 Octagon Security. All rights reserved.</span>
          <span className="os-footer__bar-links">
            <a href="/privacy/">Privacy Policy</a>
            <a href="/terms/">Terms of Service</a>
          </span>
          <span className="os-footer__legal">Free Estimates · Licensed &amp; Insured · FL License EF0000848</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
