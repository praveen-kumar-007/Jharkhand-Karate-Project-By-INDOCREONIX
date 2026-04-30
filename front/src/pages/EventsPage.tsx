import EventCard from '../components/EventCard'
import type { EventCardData } from '../components/EventCard'
import Section from '../components/Section'

const events: EventCardData[] = [
  {
    title: 'Jharkhand Karate Open',
    date: 'May 12, 2026',
    location: 'Ranchi Sports Complex',
    details: 'A state-level tournament for kata and kumite categories.',
  },
  {
    title: 'Coach Certification Camp',
    date: 'June 7, 2026',
    location: 'Dhanbad Dojo',
    details: 'A training and certification program for new instructors.',
  },
  {
    title: 'Regional Club Meet',
    date: 'July 18, 2026',
    location: 'Jamshedpur Arena',
    details: 'A friendly tournament focused on development and community.',
  },
]

export default function EventsPage() {
  return (
    <article className="page page-events">
      <Section title="Events" subtitle="Upcoming karate events across Jharkhand.">
        <div className="card-grid">
          {events.map(event => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </Section>
    </article>
  )
}
