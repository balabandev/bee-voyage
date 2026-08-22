import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* Фоновое фото */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600')`,
          }}
        />
        
        {/* Тёмный оверлей */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Контент */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <div className="text-5xl mb-4">🐝</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-white/80">
            {t('hero.subtitle')}
          </p>
          <Link
            to="/tours"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t('features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '✈️', key: 'flights' },
              { icon: '🏨', key: 'hotels' },
              { icon: '🗺️', key: 'guides' },
            ].map(item => (
              <div
                key={item.key}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t(`features.${item.key}.title`)}
                </h3>
                <p className="text-gray-500">
                  {t(`features.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}