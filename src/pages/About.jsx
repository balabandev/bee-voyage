import { useTranslation } from 'react-i18next'

const team = [
  {
    name: 'Bee Voyage',
    role: 'about.team.role',
    emoji: '🐝',
  },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Заголовок */}
      <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">{t('about.title')}</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('about.subtitle')}</p>
      </div>

      {/* История */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('about.story.title')}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t('about.story.p1')}</p>
            <p className="text-gray-600 leading-relaxed">{t('about.story.p2')}</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600"
              alt="Travel"
              className="rounded-2xl shadow-lg w-full object-cover h-72"
            />
            <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-white px-6 py-4 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm">{t('about.years')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Цифры */}
      <section className="bg-yellow-500 py-16">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { num: '500+', key: 'clients' },
            { num: '30+', key: 'destinations' },
            { num: '5+', key: 'years' },
            { num: '98%', key: 'satisfaction' },
          ].map(item => (
            <div key={item.key}>
              <div className="text-4xl font-bold mb-2">{item.num}</div>
              <div className="text-yellow-100 text-sm">{t(`about.stats.${item.key}`)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Миссия */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('about.mission.title')}</h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">{t('about.mission.text')}</p>
      </section>

    </div>
  )
}