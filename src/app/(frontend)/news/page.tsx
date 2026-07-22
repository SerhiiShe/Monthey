import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import Card from '@/components/Card'
import { Media } from '@/payload-types'

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({
    collection: 'news',
    sort: '-publishedDate',
  })

  return (
    <main className="max-w-4xl mx-auto p-8 mt-12">
      <Link
        href="/"
        className="text-gray-500 hover:text-black hover:underline mb-8 inline-block transition-colors"
      >
        ← На главную
      </Link>

      <h1 className="text-4xl font-bold mb-8">Блог</h1>

      <div className="grid grid-cols-2 gap-6">
        {data.docs.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            image={post.image as Media}
            date={post.publishedDate}
          />

          // <article
          //   key={post.id}
          //   className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          // >
          //   <h2 className="text-2xl font-semibold mb-2">
          //     <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
          //       {post.title}
          //     </Link>
          //   </h2>
          //   <p className="text-sm text-gray-500">
          //     {post.publishedDate
          //       ? new Date(post.publishedDate).toLocaleDateString('ru-RU')
          //       : 'Дата не указана'}
          //   </p>
          // </article>
        ))}
      </div>
    </main>
  )
}
