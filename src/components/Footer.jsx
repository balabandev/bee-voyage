import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Лого и описание */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🐝</span>
            <span className="text-xl font-bold text-yellow-500">Bee Voyage</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {t('footer.desc')}
          </p>
        </div>

        {/* Навигация */}
        <div>
          <h4 className="text-yellow-500 font-bold mb-4 uppercase text-sm tracking-wider">
            {t('footer.nav')}
          </h4>
          <ul className="space-y-2">
            {[
              { to: '/', label: t('nav.home') },
              { to: '/tours', label: t('nav.tours') },
              { to: '/about', label: t('nav.about') },
              { to: '/contact', label: t('nav.contact') },
            ].map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-400 hover:text-yellow-500 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h4 className="text-yellow-500 font-bold mb-4 uppercase text-sm tracking-wider">
            {t('footer.contacts')}
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📱 Instagram: <a href="https://www.instagram.com/bee.voyage/" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors">@bee.voyage</a></li>
            <li>📧 <a href="mailto:info@beevoyage.md" className="hover:text-yellow-500 transition-colors">info@beevoyage.md</a></li>
            <li>📍 Moldova, Chișinău</li>
          </ul>
        </div>

      </div>

      {/* Нижняя полоса */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Bee Voyage. {t('footer.rights')}
      </div>
    </footer>
  )
}