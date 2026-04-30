export type EventCardData = {
  title: string
  date: string
  location: string
  details: string
}

type Props = {
  event: EventCardData
}

export default function EventCard({ event }: Props) {
  return (
    <article className="card card-event">
      <div className="event-meta">
        <strong>{event.date}</strong>
        <span>{event.location}</span>
      </div>
      <h3>{event.title}</h3>
      <p>{event.details}</p>
    </article>
  )
}
