/* Octagon Security — Client Logos strip — real logos, white */

const CLIENTS = [
  {
    id: 'client-rolex',
    src: '/assets/client-rolex-w.png',
    alt: 'Rolex',
    h: 52,
  },
  {
    id: 'client-timepiece',
    src: '/assets/client-timepiece-w.png',
    alt: 'Timepiece Trading',
    h: 44,
  },
  {
    id: 'client-anima',
    src: '/assets/client-anima-w.png',
    alt: 'Anima Domus',
    h: 40,
  },
  {
    id: 'client-yacht',
    src: '/assets/client-yacht-w.png',
    alt: 'Yacht Harbour',
    h: 34,
  },
  {
    id: 'client-indiancreek',
    src: '/assets/client-indiancreek-w.png',
    alt: 'Indian Creek Country Club',
    h: 44,
  },
  {
    id: 'client-oceanreef',
    src: '/assets/client-orc.svg',
    alt: 'Ocean Reef Club',
    h: 48,
  },
];

function LogoItem({ id, src, alt, h }) {
  return (
    <div className="os-clients__item" key={id}>
      {src ? (
        <img src={src} alt={alt} className="os-clients__logo-img" style={{ height: h + 'px' }} loading="lazy" decoding="async" />
      ) : (
        <span className="os-clients__wordmark">
          <span className="os-clients__wm-name">OCEAN REEF</span>
          <span className="os-clients__wm-sub">CLUB</span>
        </span>
      )}
    </div>
  );
}

function ClientLogos() {
  return (
    <section className="os-clients">
      <div className="os-container os-clients__inner">
        <span className="os-clients__label">
          <span className="os-clients__line"></span>
          Trusted by South Florida's finest
          <span className="os-clients__line"></span>
        </span>
        {/* Desktop: single row */}
        <div className="os-clients__logos os-clients__logos--desktop">
          {CLIENTS.map(c => <LogoItem key={c.id} {...c} />)}
        </div>
        {/* Mobile: infinite marquee carousel */}
        <div className="os-clients__marquee" aria-hidden="true">
          <div className="os-clients__marquee-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => <LogoItem key={c.id + '-' + i} {...c} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ClientLogos });
