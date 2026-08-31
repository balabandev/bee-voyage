import { useTranslation } from 'react-i18next'

const tours = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600',
    destination: 'Maldives',
    key: 'maldives',
    days: 7,
    price: '1200',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600',
    destination: 'Venice',
    key: 'venice',
    days: 5,
    price: '850',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    destination: 'Switzerland',
    key: 'swiss',
    days: 8,
    price: '1500',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600',
    destination: 'Morocco',
    key: 'morocco',
    days: 6,
    price: '750',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600',
    destination: 'Bali',
    key: 'bali',
    days: 10,
    price: '1100',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600',
    destination: 'Paris',
    key: 'paris',
    days: 4,
    price: '900',
  },
]

export default function Tours() {
  const { t } = useTranslation()

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Заголовок */}
      <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">{t('tours.title')}</h1>
        <p className="text-gray-400 text-lg">{t('tours.subtitle')}</p>
      </div>

      {/* Карточки туров */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map(tour => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Фото */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={tour.image}
                  alt={tour.destination}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {tour.days} {t('tours.days')}
                </div>
              </div>

              {/* Контент */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {t(`tours.${tour.key}.name`)}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {t(`tours.${tour.key}.desc`)}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400">{t('tours.from')}</span>
                    <span className="text-2xl font-bold text-yellow-500 ml-1">
                      €{tour.price}
                    </span>
                  </div>
                  <a
                    href="https://www.instagram.com/bee.voyage/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-yellow-500 hover:bg-yellow-400 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors"
                  >
                    {t('tours.book')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}