/* Octagon Security — Website UI Kit · Header */
const DS = () => window.OctagonSecurityDesignSystem_9e6033;
const Ic = ({ n, ...p }) => React.createElement('i', { 'data-lucide': n, ...p });

const svcPath = (slug) => (window.OS_SEO && window.OS_SEO.servicePath(slug)) || `/services/${slug}/`;

const SERVICES = [
  ['shield-check', 'Home & Business Security',       'home-security'],
  ['camera',       'Security Cameras & Surveillance', 'cameras'],
  ['bell-ring',    'Burglar Alarms & Monitoring',     'burglar-alarm'],
  ['flame',        'Fire Alarm Systems & Inspections','fire-alarm'],
  ['key-round',    'Access Control & Keyless Entry',  'access-control'],
  ['cable',        'Structured Cabling & Networking', 'structured-cabling'],
  ['building-2',   'Warehouse & Industrial Security', 'warehouse'],
];

function Header({ onQuote, activePage }) {
  const [open, setOpen] = React.useState(false);   // mobile menu
  const [svc, setSvc] = React.useState(false);     // services dropdown
  const { Button, IconButton } = DS();
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [svc, open]);
  return (
    <header className="os-header">
      <div className="os-header__main">
        <a className="os-header__logo" href="/" aria-label="Octagon Security home">
          <Picture src="/assets/logo-footer.png" alt="Octagon Security" width="180" height="46" decoding="async" />
        </a>
        <nav className="os-nav">
          <a className={`os-nav__link${activePage === 'home' ? ' os-nav__link--active' : ''}`} href="/">Home</a>
          <div className="os-nav__has-menu"
               onMouseEnter={() => setSvc(true)} onMouseLeave={() => setSvc(false)}>
            <a className={`os-nav__link${activePage === 'services' ? ' os-nav__link--active' : ''}`} href="/#services">Services <Ic n="chevron-down" /></a>
            {svc && (
              <div className="os-megamenu">
                {SERVICES.map(([icon, label, slug]) => (
                  <a key={slug} className="os-megamenu__item" href={svcPath(slug)}>
                    <span className="os-megamenu__ic"><Ic n={icon} /></span>{label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a className={`os-nav__link${activePage === 'about' ? ' os-nav__link--active' : ''}`} href="/about/">About Us</a>
        </nav>
        <div className="os-header__actions">
          <a className="os-header__phone" href="tel:786-928-0986"><Ic n="phone" /> 786-928-0986</a>
          <span className="os-header__burger">
            <IconButton label="Menu" onClick={() => setOpen(o => !o)}>
              <Ic n={open ? 'x' : 'menu'} />
            </IconButton>
          </span>
          <Button variant="primary" size="md" onClick={onQuote}>Free Quote</Button>
        </div>
      </div>
      {open && (
        <div className="os-mobilenav">
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <span className="os-mobilenav__label">Services</span>
          {SERVICES.map(([, label, slug]) => (
            <a key={slug} href={svcPath(slug)} onClick={() => setOpen(false)}
               className="os-mobilenav__sub">{label}</a>
          ))}
          <a href="/about/" onClick={() => setOpen(false)}>About Us</a>
        </div>
      )}
    </header>
  );
}

Object.assign(window, { Header, OS_SERVICES: SERVICES, OS_Ic: Ic });
