/* Octagon Security — Website UI Kit · Contact form + Quote modal */
const DS = () => window.OctagonSecurityDesignSystem_9e6033;
const FIc = (p) => (window.OS_Ic || (({ n, ...rest }) => React.createElement('i', { 'data-lucide': n, ...rest })))(p);
const FORMSPREE_URL = 'https://formspree.io/f/xrevrzbr';

function useForm() {
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');
  const [fields, setFields] = React.useState({ name: '', phone: '', email: '', propertyType: '', message: '' });
  const set = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          phone: fields.phone,
          email: fields.email,
          propertyType: fields.propertyType,
          message: fields.message,
          _subject: `New Quote Request from ${fields.name}`,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSent(true);
    } catch {
      setError('Something went wrong. Please try again or call 786-928-0986.');
    } finally {
      setSubmitting(false);
    }
  };
  return {
    sent, submitting, error, submit, fields, set,
    reset: () => { setSent(false); setError(''); setFields({ name: '', phone: '', email: '', propertyType: '', message: '' }); },
  };
}

function FormFields({ compact, fields, set }) {
  const { Input: FInput } = DS();
  return (
    <>
      <div className={compact ? 'os-form__grid os-form__grid--one' : 'os-form__grid'}>
        <FInput label="Name" placeholder="Jane Doe" required value={fields.name} onChange={set('name')} />
        <FInput label="Phone" placeholder="(786) 555-0142" required value={fields.phone} onChange={set('phone')} />
        <FInput label="Email" type="email" placeholder="you@email.com" value={fields.email} onChange={set('email')} />
        <FInput label="Property Type" placeholder="Home, warehouse, office…" value={fields.propertyType} onChange={set('propertyType')} />
      </div>
      <FInput label="How can we help?" multiline placeholder="Tell us about your property and what you're looking to protect…" value={fields.message} onChange={set('message')} />
    </>
  );
}

function ThankYou({ onReset }) {
  const { Button: FButton } = DS();
  return (
    <div className="os-form__thanks">
      <span className="os-form__thanks-ic"><FIc n="check-circle" /></span>
      <h3>Thank you — we'll be in touch.</h3>
      <p>A member of the Octagon team will reach out within one business day. Need us sooner? Call 786-928-0986.</p>
      <FButton variant="secondary" onClick={onReset}>Send another message</FButton>
    </div>
  );
}

function ContactSection() {
  const f = useForm();
  const { Button: FButton, SectionTitle: FSectionTitle, Badge: FBadge } = DS();
  return (
    <section className="os-section" id="contact">
      <div className="os-container os-contact">
        <div className="os-contact__info">
          <FSectionTitle eyebrow="Contact Us" title="Get a Free Estimate Today"
            subtitle="Have questions or need a quote? Send us a message — expert advice, no pressure." />
          <ul className="os-contact__list">
            <li><span className="os-contact__ic"><FIc n="phone" /></span><div><b>Call</b><a href="tel:786-928-0986">786-928-0986</a></div></li>
            <li><span className="os-contact__ic"><FIc n="map-pin" /></span><div><b>Service Area</b>Miami-Dade · Broward · Palm Beach</div></li>
            <li><span className="os-contact__ic"><FIc n="clock" /></span><div><b>Response</b>Within one business day</div></li>
          </ul>
          <div className="os-contact__badges">
            <FBadge tone="outline" icon={<FIc n="shield-check" />}>License EF0000848</FBadge>
            <FBadge tone="outline" icon={<FIc n="badge-check" />}>ETL / UL Listed</FBadge>
          </div>
        </div>
        <div className="os-contact__card">
          {f.sent ? <ThankYou onReset={f.reset} /> : (
            <form className="os-form" onSubmit={f.submit}>
              <FormFields fields={f.fields} set={f.set} />
              {f.error && <p className="os-form__error">{f.error}</p>}
              <FButton variant="primary" size="lg" type="submit" block disabled={f.submitting} iconRight={<FIc n="arrow-right" />}>
                {f.submitting ? 'Sending…' : 'Request My Quote'}
              </FButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function QuoteModal({ open, onClose }) {
  const f = useForm();
  const { Button: FButton } = DS();
  if (!open) return null;
  return (
    <div className="os-modal" onClick={onClose}>
      <div className="os-modal__card" onClick={e => e.stopPropagation()}>
        <button className="os-modal__close" aria-label="Close" onClick={onClose}><FIc n="x" /></button>
        <div className="os-modal__head">
          <span className="os-eyebrow">Free Quote</span>
          <h3>Let's secure your property</h3>
          <p>Tell us a little about your project and we'll follow up fast.</p>
        </div>
        {f.sent ? <ThankYou onReset={onClose} /> : (
          <form className="os-form" onSubmit={f.submit}>
            <FormFields compact fields={f.fields} set={f.set} />
            {f.error && <p className="os-form__error">{f.error}</p>}
            <FButton variant="primary" size="lg" type="submit" block disabled={f.submitting}>
              {f.submitting ? 'Sending…' : 'Request My Quote'}
            </FButton>
          </form>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { ContactSection, QuoteModal });
