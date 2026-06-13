/* Octagon Security — Service page app (shared by /services/{slug}/ pages) */
const DS = () => window.OctagonSecurityDesignSystem_9e6033;
const Ic = ({ n }) => <i data-lucide={n}></i>;
const Btn = (p) => { const { Button } = DS(); return <Button {...p} />; };

const BENEFIT_ICONS = ['shield-check','smartphone','clock','eye','layers','trending-up'];

function assetPath(p) {
  const prefix = window.OS_ASSET_PREFIX || '/assets/';
  return p.replace('../../assets/', prefix);
}

function servicePath(slug) {
  return (window.OS_SEO && window.OS_SEO.servicePath(slug)) || `services/${slug}/`;
}

function getSlug() {
  if (window.OS_SERVICE_SLUG) return window.OS_SERVICE_SLUG;
  const p = new URLSearchParams(window.location.search);
  return p.get('s') || 'home-security';
}

function ServiceHero({ svc, onQuote }) {
  const heroImg = assetPath(svc.image);
  const heroWebp = window.OS_webpSrc ? window.OS_webpSrc(heroImg) : heroImg.replace(/\.png$/i, '.webp');
  return (
    <section className="sv-hero">
      <div className="sv-hero__bg" style={{backgroundImage:`url('${heroWebp}'), url('${heroImg}')`}}/>
      <div className="sv-hero__scrim"/>
      <div className="os-container sv-hero__inner">
        <nav className="sv-crumb">
          <a href="/">Home</a><Ic n="chevron-right"/>
          <a href="/#services">Services</a><Ic n="chevron-right"/>
          <span style={{color:'#fff'}}>{svc.title.split(' in ')[0]}</span>
        </nav>
        <div className="sv-hero__eye">Our Services</div>
        <h1 className="sv-hero__h">{svc.title}</h1>
        <p className="sv-hero__sub">{svc.hero_subtitle}</p>
        <div className="sv-hero__cta">
          <Btn variant="primary" size="lg" iconLeft={<Ic n="phone"/>} href="tel:786-928-0986">786-928-0986</Btn>
          <Btn variant="secondary" size="lg" onClick={onQuote} style={{background:'rgba(255,255,255,.06)',color:'#fff',borderColor:'rgba(255,255,255,.4)'}}>Get a Quote</Btn>
        </div>
      </div>
    </section>
  );
}

function ServiceIntro({ svc, onQuote }) {
  return (
    <section className="sv-intro">
      <div className="os-container sv-intro__grid">
        <div className="sv-intro__copy">
          {(() => { const { SectionTitle } = DS(); return <SectionTitle eyebrow={`Services in ${svc.location}`} title={svc.hero_subtitle}/>; })()}
          <p className="sv-intro__p">{svc.intro}</p>
          {svc.intro2 && <p className="sv-intro__p2">{svc.intro2}</p>}
          <div className="sv-intro__cta">
            <a className="sv-intro__phone" href="tel:786-928-0986"><Ic n="phone"/>786-928-0986</a>
            <Btn variant="primary" onClick={onQuote}>Get a Quote</Btn>
          </div>
        </div>
        <div className="sv-intro__img">
          <Picture src={assetPath(svc.image)} alt={svc.title} loading="lazy" decoding="async"/>
        </div>
      </div>
    </section>
  );
}

function ServiceFeatures({ svc }) {
  if (!svc.features.length) return null;
  return (
    <section className="sv-features">
      <div className="os-container">
        <div className="sv-features__head">
          {(() => { const { SectionTitle } = DS(); return <SectionTitle eyebrow="What We Do" title="Our Services" align="center"/>; })()}
        </div>
        <div className="sv-features__grid">
          {svc.features.map(f=>(
            <div className="sv-feat" key={f.title}>
              <h3 className="sv-feat__title">{f.title}</h3>
              <ul className="sv-feat__list">{f.bullets.map(b=><li key={b}>{b}</li>)}</ul>
              {f.note && <p className="sv-feat__note">{f.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceBenefits({ svc }) {
  if (!svc.benefits.length) return null;
  return (
    <section className="sv-benefits">
      <div className="os-container">
        <div className="sv-benefits__head">
          {(() => { const { SectionTitle } = DS(); return <SectionTitle eyebrow="Why It Matters" title="Benefits of Professional Security System Installation" align="center"/>; })()}
        </div>
        <div className="sv-benefits__grid">
          {svc.benefits.map((b,i)=>(
            <div className="sv-benefit" key={b.title}>
              <span className="sv-benefit__ic"><Ic n={BENEFIT_ICONS[i]||'check-circle'}/></span>
              <h3 className="sv-benefit__title">{b.title}</h3>
              <hr className="sv-benefit__rule"/>
              <p className="sv-benefit__body">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceClosing({ svc, onQuote }) {
  if (!svc.closing) return null;
  return (
    <section className="sv-closing">
      <div className="os-container sv-closing__inner">
        <div>
          <h2 className="sv-closing__h">{svc.closing_title}</h2>
          <p className="sv-closing__p">{svc.closing}</p>
        </div>
        <div className="sv-closing__btns">
          <Btn variant="primary" size="lg" iconLeft={<Ic n="phone"/>} href="tel:786-928-0986">786-928-0986</Btn>
          <Btn variant="secondary" size="md" onClick={onQuote} style={{borderColor:'rgba(255,255,255,.3)',color:'#fff',background:'rgba(255,255,255,.06)'}}>Get a Quote</Btn>
        </div>
      </div>
    </section>
  );
}

function ServiceFAQ({ svc }) {
  const [open, setOpen] = React.useState(null);
  if (!svc.faqs.length) return null;
  return (
    <section className="sv-faq">
      <div className="os-container">
        <div className="sv-faq__head">
          {(() => { const { SectionTitle } = DS(); return <SectionTitle eyebrow="Have Questions?" title="Frequently Asked Questions" align="center"/>; })()}
        </div>
        <div className="sv-faq__list">
          {svc.faqs.map((f,i)=>(
            <div key={i} className={`sv-faq__item${open===i?' sv-faq__item--open':''}`}>
              <button className="sv-faq__btn" onClick={()=>setOpen(open===i?null:i)}>
                <span className="sv-faq__q">{f.q}</span>
                <span className="sv-faq__ic"><Ic n="plus"/></span>
              </button>
              <div className="sv-faq__answer" style={open===i?{maxHeight:'400px'}:{}}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceNav({ current }) {
  const links = (window.OS_SEO && window.OS_SEO.services) || [];
  return (
    <section className="sv-sidenav">
      <div className="os-container sv-sidenav__inner">
        <span className="sv-sidenav__label">All Services</span>
        <div className="sv-sidenav__links">
          {links.map(s=>(
            <a key={s.slug} href={servicePath(s.slug)}
               className={`sv-sidenav__link${s.slug===current?' sv-sidenav__link--active':''}`}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [quote, setQuote] = React.useState(false);
  const slug = getSlug();
  const svc = window.OS_SERVICES_DATA[slug] || window.OS_SERVICES_DATA['home-security'];
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div className="os-site">
      <Header onQuote={() => setQuote(true)} activePage="services" />
      <main>
        <ServiceHero svc={svc} onQuote={()=>setQuote(true)}/>
        <ServiceIntro svc={svc} onQuote={()=>setQuote(true)}/>
        <ServiceFeatures svc={svc}/>
        <ServiceBenefits svc={svc}/>
        <ServiceClosing svc={svc} onQuote={()=>setQuote(true)}/>
        <ServiceFAQ svc={svc}/>
        <Services />
        <ServiceNav current={slug}/>
      </main>
      <Footer />
      <QuoteModal open={quote} onClose={()=>setQuote(false)}/>
    </div>
  );
}

const mount = () => {
  if (!window.OctagonSecurityDesignSystem_9e6033 || !window.OS_SERVICES_DATA || !window.Header || !window.Footer || !window.QuoteModal || !window.Services) return setTimeout(mount, 40);
  ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
};
mount();
