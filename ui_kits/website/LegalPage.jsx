/* Octagon Security — Privacy Policy & Terms of Service */

const LEGAL_UPDATED = 'June 16, 2026';

function LegalShell({ title, children }) {
  return (
    <section className="os-legal">
      <div className="os-container os-legal__inner">
        <nav className="os-legal__crumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span>{title}</span>
        </nav>
        <h1 className="os-legal__title">{title}</h1>
        <p className="os-legal__updated">Last updated: {LEGAL_UPDATED}</p>
        <div className="os-legal__body">{children}</div>
      </div>
    </section>
  );
}

function PrivacyPolicy() {
  return (
    <LegalShell title="Privacy Policy">
      <p>Octagon Security (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates <a href="https://www.octagonsecured.com">octagonsecured.com</a>. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us for a quote.</p>

      <h2>Information We Collect</h2>
      <p><strong>Information you provide.</strong> When you submit our contact or quote form, we collect the details you enter — typically your name, phone number, email address, property type, and message.</p>
      <p><strong>Automatic information.</strong> Like most websites, our hosting provider (Vercel) may log technical data such as your IP address, browser type, pages visited, and the date and time of your visit. This helps us keep the site secure and running reliably.</p>
      <p><strong>What we do not collect.</strong> We do not use advertising pixels, retargeting cookies, or third-party analytics tools (such as Google Analytics) on this website.</p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Respond to your quote requests and questions</li>
        <li>Contact you by phone, text, or email about your inquiry</li>
        <li>Operate, maintain, and improve our website</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>Third-Party Services</h2>
      <p>We use trusted service providers to operate this site:</p>
      <ul>
        <li><strong>Formspree</strong> — processes contact form submissions and forwards them to our team</li>
        <li><strong>Vercel</strong> — hosts the website and runs our server-side functions (such as fetching Google reviews)</li>
        <li><strong>Google Fonts</strong> — delivers the fonts displayed on this site</li>
      </ul>
      <p>These providers process data on our behalf and under their own privacy policies. We only share the information needed for them to perform their services.</p>

      <h2>Communications &amp; Consent</h2>
      <p>When you submit our contact form, you agree that we may contact you by phone, text message, or email regarding your request. Message and data rates may apply. You can opt out of marketing messages at any time by replying STOP to a text or asking us to stop contacting you.</p>

      <h2>How Long We Keep Information</h2>
      <p>We retain form submissions and related correspondence for as long as needed to respond to your inquiry, provide services, and maintain business records — typically up to three years unless a longer period is required by law.</p>

      <h2>Your Rights</h2>
      <p>Depending on where you live, you may have the right to:</p>
      <ul>
        <li>Request access to the personal information we hold about you</li>
        <li>Request correction or deletion of your information</li>
        <li>Opt out of certain communications</li>
      </ul>
      <p><strong>California residents:</strong> We do not sell or share personal information for cross-context behavioral advertising. You may contact us to exercise your privacy rights under the California Consumer Privacy Act (CCPA/CPRA).</p>
      <p>To make a request, call <a href="tel:786-928-0986">786-928-0986</a> or email us through our <a href="/#contact">contact form</a>. We will verify your identity before fulfilling requests.</p>

      <h2>Children&rsquo;s Privacy</h2>
      <p>Our website is not directed at children under 13, and we do not knowingly collect personal information from children.</p>

      <h2>Security</h2>
      <p>We take reasonable measures to protect the information we collect. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page will reflect any changes. Continued use of the site after changes constitutes acceptance of the updated policy.</p>

      <h2>Contact Us</h2>
      <p>Questions about this Privacy Policy? Call <a href="tel:786-928-0986">786-928-0986</a> or use our <a href="/#contact">contact form</a>.</p>
      <p className="os-legal__note">Octagon Security · FL License EF0000848 · Serving Miami-Dade, Broward &amp; Palm Beach Counties</p>
    </LegalShell>
  );
}

function TermsOfService() {
  return (
    <LegalShell title="Terms of Service">
      <p>These Terms of Service (&ldquo;Terms&rdquo;) govern your use of <a href="https://www.octagonsecured.com">octagonsecured.com</a>, operated by Octagon Security (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using this website, you agree to these Terms.</p>

      <h2>Use of This Website</h2>
      <p>This site provides general information about our security installation services in South Florida. You may browse the site and submit inquiries for personal, non-commercial purposes. You agree not to misuse the site, attempt unauthorized access, or interfere with its operation.</p>

      <h2>Quotes &amp; Estimates</h2>
      <p>Information on this website — including pricing references, service descriptions, and online quote requests — is provided for general informational purposes. A formal quote or contract is only created when we provide a written proposal or signed agreement. Online submissions do not guarantee availability, pricing, or scheduling.</p>

      <h2>Service Area</h2>
      <p>We primarily serve Miami-Dade, Broward, and Palm Beach Counties in Florida. Service availability outside this area is not guaranteed and is subject to our discretion.</p>

      <h2>Professional Licensing</h2>
      <p>Octagon Security holds Florida alarm system contractor license <strong>EF0000848</strong>. All installation work is performed in compliance with applicable local, state, and national codes by licensed and insured technicians.</p>

      <h2>Website Content</h2>
      <p>Text, images, logos, and other materials on this site are owned by Octagon Security or used with permission. You may not copy, reproduce, or distribute our content without written consent, except for personal reference or sharing links to our pages.</p>

      <h2>Third-Party Links</h2>
      <p>Our site may link to third-party websites (such as Google, Yelp, or social media). We are not responsible for the content or privacy practices of those sites.</p>

      <h2>Disclaimer of Warranties</h2>
      <p>This website and its content are provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.</p>

      <h2>Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, Octagon Security shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website. Our total liability for any claim related to the site shall not exceed $100.</p>

      <h2>Indemnification</h2>
      <p>You agree to indemnify and hold harmless Octagon Security from claims arising out of your misuse of this website or violation of these Terms.</p>

      <h2>Governing Law</h2>
      <p>These Terms are governed by the laws of the State of Florida, without regard to conflict-of-law principles. Any disputes shall be resolved in the courts of Miami-Dade County, Florida.</p>

      <h2>Changes to These Terms</h2>
      <p>We may update these Terms at any time. The &ldquo;Last updated&rdquo; date at the top reflects the latest revision. Your continued use of the site after changes constitutes acceptance.</p>

      <h2>Contact</h2>
      <p>Questions about these Terms? Call <a href="tel:786-928-0986">786-928-0986</a> or use our <a href="/#contact">contact form</a>.</p>
      <p className="os-legal__note">Octagon Security · FL License EF0000848 · Serving Miami-Dade, Broward &amp; Palm Beach Counties</p>
    </LegalShell>
  );
}

function LegalApp() {
  const doc = window.OS_LEGAL_DOC || 'privacy';
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div className="os-site">
      <Header activePage={doc} />
      <main>
        {doc === 'terms' ? <TermsOfService /> : <PrivacyPolicy />}
      </main>
      <Footer />
    </div>
  );
}

const mountLegal = () => {
  if (!window.OctagonSecurityDesignSystem_9e6033 || !window.Header || !window.Footer) return setTimeout(mountLegal, 40);
  ReactDOM.createRoot(document.getElementById('root')).render(<LegalApp />);
};
mountLegal();
