/* Octagon Security — Website UI Kit · Services */
const { Card: SCard, Button: SButton, SectionTitle: SSectionTitle } = window.OctagonSecurityDesignSystem_9e6033;
const SIc = window.OS_Ic;

const svcPath = (slug) => (window.OS_SEO && window.OS_SEO.servicePath(slug)) || `/services/${slug}/`;

const SERVICE_CARDS = [
  ['/assets/svc-burglar-alarm.png', 'Burglar Alarm Systems & Monitoring',
   'Professional alarm systems with 24/7 monitoring, real-time alerts, and fast response. Built to detect intrusion quickly.',
   'burglar-alarm'],
  ['/assets/svc-cameras.png', 'Security Cameras & Surveillance',
   'High-quality camera systems with clear video, remote access, and reliable performance — designed for full coverage.',
   'cameras'],
  ['/assets/svc-smoke.png', 'Fire Alarm Installation & Inspections',
   'Code-compliant fire alarm systems, inspections, and monitoring to keep your property protected and up to standard.',
   'fire-alarm'],
  ['/assets/team-ladders.png', 'Structured Cabling & Networking',
   'Clean, organized cabling for cameras, alarms, and networks — built for performance and long-term reliability.',
   'structured-cabling'],
  ['/assets/svc-access.png', 'Access Control Systems',
   'Control and manage entry points with keyless access designed for security, convenience, and accountability.',
   'access-control'],
  ['/assets/svc-home-business.png', 'Home & Business Security',
   'Professional security system installation for homes and businesses across South Florida — cameras, alarms, fire, access control, and cabling.',
   'home-security'],
  ['/assets/svc-warehouse.png', 'Warehouse & Industrial Security',
   'Integrated security for warehouses and distribution centers — video surveillance, access control, burglar alarms, and network infrastructure.',
   'warehouse'],
];

function Services() {
  return (
    <section className="os-section" id="services">
      <div className="os-container">
        <div className="os-section__head">
          <SSectionTitle eyebrow="What We Do" title="Our Services"
            subtitle="One team for cameras, alarms, fire, access control, cabling, and warehouse security — across South Florida." />
        </div>
        <div className="os-services">
          {SERVICE_CARDS.map(([img, title, body, slug]) => (
            <SCard key={title} image={img} imageAlt={title} title={title} accent interactive
                   footer={<SButton variant="ghost" iconRight={<SIc n="arrow-right" />} href={svcPath(slug)}>Learn More</SButton>}>
              {body}
            </SCard>
          ))}
          <div className="os-services__cta">
            <span className="os-services__cta-ic"><SIc n="phone-call" /></span>
            <h3>Not sure what you need?</h3>
            <p>Tell us about your property and we'll design a system that fits.</p>
            <SButton variant="primary" size="lg" href="tel:786-928-0986">Talk to an Expert</SButton>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services });
