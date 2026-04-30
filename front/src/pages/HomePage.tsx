import Section from '../components/Section'
import ProgramCard from '../components/ProgramCard'
import type { ProgramCardData } from '../components/ProgramCard'
import EventCard from '../components/EventCard'
import type { EventCardData } from '../components/EventCard'
import heroImage from '../assets/hero.png'

const programs: ProgramCardData[] = [
  {
    title: 'Beginner Karate Training',
    description: 'Fundamentals of kata, kihon, and kumite for new members.',
    detail: 'Age 6+ | All skill levels welcome',
  },
  {
    title: 'Competitive Sparring',
    description: 'Advanced training plans for state-level tournaments.',
    detail: 'Focused drilling, strategy, and referee sessions',
  },
  {
    title: 'Self-Defense Workshops',
    description: 'Practical karate-based self-defense for confidence.',
    detail: 'Open to women, men, and youth',
  },
]

const events: EventCardData[] = [
  {
    title: 'Jharkhand Karate Open',
    date: 'May 12, 2026',
    location: 'Ranchi Sports Complex',
    details: 'A state championship event with kata and kumite categories.',
  },
  {
    title: 'Coach Certification Camp',
    date: 'June 7, 2026',
    location: 'Dhanbad Dojo',
    details: 'National-level coaching team training and referee certification.',
  },
]

export default function HomePage() {
  return (
    <article className="page page-home">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Jharkhand State Karate Association</p>
          <h1>Train with discipline, compete with pride.</h1>
          <p>
            JHSKA brings together karateka across Jharkhand through training,
            tournaments, and community programs for beginners and champions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#programs">
              Explore Programs
            </a>
            <a className="button button-secondary" href="#contact">
              Join the Association
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img className="hero-image" src={heroImage} alt="Karate athlete performing a kick" />
            <div className="hero-card hero-card-overlay">
              <p className="hero-label">Upcoming Event</p>
              <h2>Jharkhand Karate Open</h2>
              <p>Register your dojo and athletes for May 12, 2026.</p>
            </div>
          </div>
        </div>
      </section>

      <Section title="Programs" subtitle="Training paths designed for every karateka."> 
        <div className="card-grid"> 
          {programs.map(program => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </Section>

      <Section title="Latest Events" subtitle="Stay informed about tournaments and workshops.">
        <div className="card-grid">
          {events.map(event => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </Section>

      <Section title="Why JHSKA" subtitle="A community built on respect, courage, and progress.">
        <div className="feature-list">
          <div className="feature-item">
            <strong>Inclusive training</strong>
            <p>Programs for kids, youth, adults, and coaches.</p>
          </div>
          <div className="feature-item">
            <strong>Statewide reach</strong>
            <p>Dojo support, referee development, and tournament logistics.</p>
          </div>
          <div className="feature-item">
            <strong>Expert leadership</strong>
            <p>Certified instructors from established karate federations.</p>
          </div>
        </div>
      </Section>
    </article>
  )
}
