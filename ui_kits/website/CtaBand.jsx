/* Octagon Security — Website UI Kit · CTA Band ("Don't get robbed—call Rob.") */
const { Button: CButton, Eyebrow: CEyebrow } = window.OctagonSecurityDesignSystem_9e6033;
const CIc = window.OS_Ic;

function CtaBand({ onQuote }) {
  return (
    <section className="os-ctaband">
      <div className="os-ctaband__media" role="img" aria-label="Installed security panel" />
      <div className="os-ctaband__scrim" />
      <div className="os-container os-ctaband__inner">
        <CEyebrow inverse>A Promise From Our Team</CEyebrow>
        <div className="os-ctaband__title-row">
          <Picture src="/assets/rob-mascot.png" alt="" className="os-ctaband__mascot-img" aria-hidden="true" loading="lazy" decoding="async" />
          <h2 className="os-ctaband__title"><span className="os-ctaband__white">Don't get robbed—</span><span className="os-ctaband__accent">call Rob.</span></h2>
        </div>
        <p className="os-ctaband__sub">
          From cameras and burglar alarms with 24/7 monitoring to fire alarm systems and structured
          cabling, we design solutions built to perform and easy to manage. Starting fresh or upgrading,
          our team responds quickly and gets the job done right.
        </p>
        <div className="os-ctaband__cta">
          <CButton variant="primary" size="lg" iconLeft={<CIc n="phone" />} href="tel:786-928-0986">786-928-0986</CButton>
          <CButton variant="dark" size="lg" onClick={onQuote} iconRight={<CIc n="arrow-right" />}>Get a Quote</CButton>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CtaBand });
