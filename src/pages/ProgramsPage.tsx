import ProgramCard from '../components/ProgramCard'
import type { ProgramCardData } from '../components/ProgramCard'
import Section from '../components/Section'

const programs: ProgramCardData[] = [
  {
    title: 'Beginner Karate Training',
    description: 'Fundamental skills, etiquette, and basic technique for new karateka.',
    detail: 'Every dojo level | Monday, Wednesday, Friday',
  },
  {
    title: 'Intermediate Curriculum',
    description: 'Refine kata execution, sparring timing, and belt progression skills.',
    detail: 'Entry after white belt progression',
  },
  {
    title: 'Tournament Preparation',
    description: 'Conditioning, strategy, and competitive drills for state events.',
    detail: 'Competition-ready training groups',
  },
  {
    title: 'Coach and Referee Education',
    description: 'Accredited workshops to expand coaching knowledge and officiating skills.',
    detail: 'Official certification and training support',
  },
]

export default function ProgramsPage() {
  return (
    <article className="page page-programs">
      <Section title="Programs" subtitle="Choose the right path for your karate journey.">
        <div className="card-grid card-grid-2">
          {programs.map(program => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </Section>
    </article>
  )
}
