/* Octagon Security — Website UI Kit · Hero */
const { Button: HButton, Badge: HBadge } = window.OctagonSecurityDesignSystem_9e6033;
const HIc = window.OS_Ic;

function Hero({ onQuote }) {
  return (
    <section className="os-hero">
      <div className="os-hero__media" role="img" aria-label="Professional security installation" />
      <div className="os-hero__scrim" />
      <div className="os-container os-hero__inner">
        <span className="os-eyebrow os-eyebrow--inv">Get Octagon Secured</span>
        <h1 className="os-hero__title">
          Commercial &amp; Residential Security Systems<br />
          <span className="os-hero__accent">Installed Right the First Time</span>
        </h1>
        <p className="os-hero__sub">
          Security cameras, access control, burglar alarms, fire alarm systems, and structured
          cabling throughout Miami-Dade, Broward &amp; Palm Beach Counties — installed cleanly,
          backed by fast response, and supported long-term.
        </p>
        <div className="os-hero__cta">
          <HButton variant="primary" size="lg" iconLeft={<HIc n="phone" />} href="tel:786-928-0986">
            786-928-0986
          </HButton>
          <HButton variant="secondary" size="lg" className="os-hero__ghost" onClick={onQuote}>
            Get a Free Quote
          </HButton>
        </div>
        <div className="os-hero__badges">
          <HBadge tone="solid" icon={<HIc n="badge-check" />}>Free Estimates</HBadge>
          <HBadge tone="solid" icon={<HIc n="shield-check" />}>Licensed &amp; Insured</HBadge>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
