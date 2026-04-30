export type ProgramCardData = {
  title: string
  description: string
  detail: string
}

type Props = {
  program: ProgramCardData
}

export default function ProgramCard({ program }: Props) {
  return (
    <article className="card card-highlight">
      <h3>{program.title}</h3>
      <p>{program.description}</p>
      <div className="card-note">{program.detail}</div>
    </article>
  )
}
