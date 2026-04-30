import Section from '../components/Section'

export default function AboutPage() {
  return (
    <article className="page page-about">
      <Section title="About JHSKA" subtitle="A karate association for the people of Jharkhand.">
        <div className="page-copy">
          <p>
            The Jharkhand State Karate Association supports karate clubs, athletes,
            and officials across the state. Our mission is to preserve traditional
            martial arts values while helping members reach their personal best.
          </p>
          <p>
            We organize training camps, referee certification programs, and state
            championships so karate continues to grow with discipline, safety, and
            sporting spirit.
          </p>
        </div>
      </Section>

      <Section title="Our Mission" subtitle="Three pillars of JHSKA.">
        <div className="feature-list feature-grid">
          <div className="feature-item">
            <strong>Development</strong>
            <p>Support dojos and coaches with structured learning pathways.</p>
          </div>
          <div className="feature-item">
            <strong>Competition</strong>
            <p>Host fair tournaments that elevate athletes across Jharkhand.</p>
          </div>
          <div className="feature-item">
            <strong>Community</strong>
            <p>Grow karate values of respect, resilience, and health.</p>
          </div>
        </div>
      </Section>
    </article>
  )
}
