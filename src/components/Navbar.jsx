import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const languages = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'ro', label: 'RO' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/tours', label: t('nav.tours') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Логотип */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🐝</span>
          <span className="text-xl font-bold text-yellow-500 tracking-tight">
            Bee Voyage
          </span>
        </Link>

        {/* Навигация — десктоп */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-yellow-500 border-b-2 border-yellow-500'
                    : 'text-gray-600 hover:text-yellow-500'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Переключатель языков + бургер */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-yellow-500 text-white'
                    : 'text-gray-500 hover:text-yellow-500'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Бургер — мобильный */}
          <button
            className="md:hidden text-gray-600 hover:text-yellow-500"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? 'text-yellow-500' : 'text-gray-600'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}