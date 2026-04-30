import type { ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="section-block">
      <div className="section-heading">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="section-content">{children}</div>
    </section>
  )
}
