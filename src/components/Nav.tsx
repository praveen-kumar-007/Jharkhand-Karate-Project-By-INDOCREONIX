export type PageKey = 'home' | 'about' | 'programs' | 'events' | 'contact'

type NavItem = {
  key: PageKey
  label: string
}

const navItems: NavItem[] = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'programs', label: 'Programs' },
  { key: 'events', label: 'Events' },
  { key: 'contact', label: 'Contact' },
]

import logoPath from '../assets/logo.svg'

type Props = {
  activePage: PageKey
  onNavigate: (page: PageKey) => void
}

export default function Nav({ activePage, onNavigate }: Props) {
  return (
    <header className="site-header">
      <div className="brand-group">
        <img className="brand-logo" src={logoPath} alt="JHSKA logo" />
        <div>
          <p className="brand-name">Jharkhand State Karate Association</p>
          <p className="brand-tag">Strength, discipline, community</p>
        </div>
      </div>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map(item => (
          <button
            key={item.key}
            className={`nav-link ${activePage === item.key ? 'active' : ''}`}
            onClick={() => onNavigate(item.key)}
            aria-current={activePage === item.key ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
