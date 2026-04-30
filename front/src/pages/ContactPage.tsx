import Section from '../components/Section'

export default function ContactPage() {
  return (
    <article className="page page-contact" id="contact">
      <Section title="Contact" subtitle="Reach out and join the Jharkhand karate community.">
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Association Office</h3>
            <p>Ranchi Sports Complex</p>
            <p>Email: info@jhskakarate.org</p>
            <p>Phone: +91 98765 43210</p>
          </div>
          <div className="contact-card">
            <h3>Membership</h3>
            <p>Register your dojo or athlete with JHSKA.</p>
            <p>Support for belts, ranks, and tournament entries.</p>
          </div>
        </div>
        <p className="contact-note">
          For dojo support, event registration, and training schedules, send us a message.
        </p>
      </Section>
    </article>
  )
}
