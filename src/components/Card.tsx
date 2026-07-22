import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

// Пропсы для карточки (необязательно, но полезно для переиспользования)
interface CardProps {
  id: number
  title: string
  description: string
  image: Media | string
  date: string | null
}

// Константа с иконкой стрелки
const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-teal-950" // Цвет иконки
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Card({
  id,
  title = '',
  description = '',
  image = '',
  date = '',
}: Partial<CardProps>) {
  const imageUrl = typeof image === 'string' ? image : image?.url
  const imageAlt = typeof image === 'string' ? title : image?.alt || title

  return (
    <Link
      href={`/blog/${id}`}
      className="max-w-135 bg-white rounded-3xl shadow-lg p-6 font-sans hover:bg-blue-50 transition-colors"
    >
      {/* Изображение с закругленными углами */}
      <div className="overflow-hidden rounded-2xl mb-5 aspect-16/10 relative bg-stone-100">
        {imageUrl ? (
          <Image
            src={imageUrl} // Передаем динамический URL из CMS
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-w-768px) 100vw, 540px"
          />
        ) : (
          // Заглушка, если картинки нет
          <div className="w-full h-full flex items-center justify-center text-stone-400">
            No image
          </div>
        )}
      </div>

      {/* Ряд с иконкой и датой */}
      <div className="flex items-center justify-between mb-5">
        <div className="bg-blue-200 rounded-full size-12 flex items-center justify-center">
          <ArrowIcon />
        </div>
        {date && (
          <p className="text-neutral-500 text-sm font-medium">
            {new Date(date).toLocaleDateString('de-CH')}
          </p>
        )}
      </div>

      {/* Заголовок (font-serif) */}
      <h2 className="text-[32px] font-semibold text-teal-950 leading-tight mb-4 font-serif">
        {title}
      </h2>

      {/* Описание */}
      <p className="text-neutral-700 text-base leading-relaxed mb-6">{description}</p>
    </Link>
  )
}
