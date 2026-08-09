import { useTranslation } from 'react-i18next'

export default function App() {
  const { t, i18n } = useTranslation()

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-white">{t('hero.title')}</h1>
      <p className="text-white text-xl">{t('hero.subtitle')}</p>
      <div className="flex gap-2">
        {['ru', 'en', 'ro'].map(lang => (
          <button
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
            className="bg-white text-blue-500 px-4 py-2 rounded font-bold uppercase"
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  )
}