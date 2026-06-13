/* Octagon Security — Website UI Kit · Why Choose */
const { SectionTitle: WSectionTitle } = window.OctagonSecurityDesignSystem_9e6033;
const WIc = window.OS_Ic;

const REASONS = [
  ['award', '65+ Years of Combined Experience',
   'From cameras and alarms to fire systems and cabling, we design and install it properly the first time.'],
  ['layers', 'Full-Service Capabilities',
   'CCTV, burglar alarms with 24/7 monitoring, fire alarm installation, and structured cabling — handled in-house.'],
  ['ruler', 'Clean, Professional Installations',
   'Organized, well-executed work — every cable run and device placed with long-term reliability in mind.'],
  ['shield-check', '24/7 Monitoring & Rapid Support',
   'Round-the-clock protection with fast response and dependable service whenever you need it.'],
];

function WhyChoose() {
  return (
    <section className="os-section os-section--concrete">
      <div className="os-container">
        <SectionTitleCentered />
        <div className="os-reasons">
          {REASONS.map(([icon, title, body]) => (
            <div className="os-reason" key={title}>
              <span className="os-reason__ic"><WIc n={icon} /></span>
              <h3 className="os-reason__title">{title}</h3>
              <p className="os-reason__body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitleCentered() {
  return (
    <div className="os-section__head">
      <WSectionTitle
        eyebrow="Why Choose Octagon"
        title="Your Partner in Complete Property Protection"
        subtitle="We assess each property, recommend practical solutions, and stay responsive long after the job is done."
        align="center"
      />
    </div>
  );
}

Object.assign(window, { WhyChoose });
