import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
// Импортируем готовый компонент конвертера
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'

export default async function SinglePostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const payload = await getPayload({ config: configPromise })

  const post = await payload.findByID({
    collection: 'news',
    id: id,
  })

  console.log(post)

  return (
    <main className="max-w-3xl mx-auto p-8 mt-30">
      <Link
        href="/"
        className="text-gray-500 hover:text-black hover:underline mb-8 inline-block transition-colors"
      >
        ← Back
      </Link>

      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-500">
            {post.publishedDate
              ? new Date(post.publishedDate).toLocaleDateString('de-CH')
              : 'Без даты'}
          </p>
        </header>

        {typeof post.image !== 'number' && post.image.url && (
          <div className="relative aspect-video rounded-3xl overflow-hidden">
            <Image
              src={post.image.url}
              alt={post.image.alt}
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 540px"
            />
          </div>
        )}

        {/* Компонент RichText автоматически распарсит JSON из базы в HTML */}
        {/* Класс "prose" - это типографика Tailwind (объяснение ниже) */}
        <div className="prose prose-lg prose-blue max-w-none">
          {post.content && <RichText data={post.content} />}
        </div>
      </article>
    </main>
  )
}
