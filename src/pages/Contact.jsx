import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">{t('contact.title')}</h1>
        <p className="text-gray-400 text-lg">{t('contact.subtitle')}</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            {t('contact.info.title')}
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📱</div>
              <div>
                <div className="font-bold text-gray-800">Instagram</div>
                <a href="https://www.instagram.com/bee.voyage/" target="_blank" rel="noreferrer" className="text-yellow-500 hover:text-yellow-400">
                  @bee.voyage
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">📧</div>
              <div>
                <div className="font-bold text-gray-800">Email</div>
                <a href="mailto:info@beevoyage.md" className="text-yellow-500 hover:text-yellow-400">
                  info@beevoyage.md
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <div className="font-bold text-gray-800">{t('contact.info.location')}</div>
                <div className="text-gray-500">Vasile Alecsandri 89/1, Chisinau, Moldova 2012</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🕐</div>
              <div>
                <div className="font-bold text-gray-800">{t('contact.info.hours')}</div>
                <div className="text-gray-500">{t('contact.info.hoursValue')}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t('contact.form.title')}
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500"
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.phone')}
              </label>
              <input
                type="tel"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500"
                placeholder="+373 XX XXX XXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.message')}
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>
            <a
              href="https://www.instagram.com/bee.voyage/"
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-3 rounded-lg text-center"
            >
              {t('contact.form.submit')}
            </a>
            <p className="text-xs text-gray-400 text-center">
              {t('contact.form.note')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}