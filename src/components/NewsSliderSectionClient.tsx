'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
// Swiper components for React
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

// Swiper Basic Styles
import 'swiper/css'
import 'swiper/css/navigation'
import { News, NewsCategory, NewsSliderSectionType } from '@/payload-types'
import Link from 'next/link'
import { ArrowRightIcon } from './ui/icons/ArrowRightIcon'

export default function NewsSliderSectionClient({
  staticData,
  news,
  categories,
}: {
  staticData: NewsSliderSectionType
  news: News[]
  categories: NewsCategory[]
}) {
  const swiperRef = useRef<any>(null)

  const [currentCategory, setCurrentCategory] = useState<number | null>(null)
  const filteredNews: News[] =
    currentCategory === null
      ? news
      : news.filter((newsItem) =>
          newsItem.categories?.some(
            (category) => typeof category !== 'number' && category.id === currentCategory,
          ),
        )

  return (
    <section className="overflow-hidden">
      <div className="py-16 px-6 lg:px-12 w-full max-w-350 mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#00acee] mb-8">{staticData.title}</h2>

        {/* Control Panel */}
        <div className="flex justify-between items-center mb-10">
          <div
            className="relative inline-block
          after:content-['']
          after:absolute
          after:right-4
          after:top-1/2
          after:w-2
          after:h-2
          after:-translate-y-2/3
          after:rotate-45
          after:border-r-2
          after:border-b-2
          after:border-current
          after:pointer-events-none"
          >
            <select
              value={currentCategory ?? ''}
              className="flex items-center gap-2 pl-5 pr-10 py-2.5 border border-slate-300 rounded-full text-slate-700 font-medium hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00acee]/50 cursor-pointer appearance-none "
              onChange={(e) => setCurrentCategory(e.target.value ? Number(e.target.value) : null)}
            >
              <option value="">Catégories</option>

              {categories?.map(({ name, id }) => {
                return (
                  <option key={id} value={id}>
                    {name}
                  </option>
                )
              })}
            </select>
          </div>
          <Link
            href={staticData.buttonUrl || '#'}
            className="hidden sm:inline-block px-6 py-2.5 bg-[#00acee] text-white rounded-full font-medium hover:bg-sky-500 transition-colors shadow-sm"
          >
            {staticData.buttonText}
          </Link>
        </div>

        {/* Slider block */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.2} // 1 card and a piece of the next one
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2, // Tablets
              },
              1024: {
                slidesPerView: 3.2, // Desktops
              },
              1280: {
                slidesPerView: 3.5,
              },
            }}
            className="pb-6! overflow-visible!" // padding at the bottom for shadows
          >
            {filteredNews.map((post) => {
              const imageUrl = typeof post.image === 'number' ? '' : post.image?.url

              return (
                <SwiperSlide key={post.id} className="h-auto!">
                  {' '}
                  {/* Card */}
                  <Link
                    href={`/news/${post.id}`}
                    className="flex flex-col h-full bg-white border border-sky-200/70 rounded-[20px] overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                  >
                    {/* Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          fill
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                        />
                      )}
                    </div>

                    {/* Card content */}
                    <div className="p-7 flex flex-col grow">
                      {/* Tag and date */}
                      <div className="flex items-center gap-4 mb-4">
                        {post.categories && post.categories.length > 0 && (
                          <div className="flex gap-2">
                            {post.categories.map((category) => {
                              if (typeof category === 'number') return null

                              return (
                                <span
                                  key={category.id}
                                  className="px-4 py-1 border border-[#00acee] text-[#00acee] text-sm font-medium rounded-full"
                                >
                                  {category.name}
                                </span>
                              )
                            })}
                          </div>
                        )}
                        {typeof post.publishedDate === 'string' && (
                          <span className="text-slate-500 text-sm font-medium ml-auto">
                            {new Date(post.publishedDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>

                      {/* Headline */}
                      <h3 className="text-[22px] font-semibold text-[#0f2b3e] mb-4 leading-snug">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed mb-4 mt-auto">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Custom Next Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white border-2 border-transparent hover:border-sky-100 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] text-[#00acee] transition-all hover:scale-110 focus:outline-none cursor-pointer"
            aria-label="Suivant"
          >
            <ArrowRightIcon />
          </button>
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="inline-block w-full px-6 py-3 bg-[#00acee] text-white rounded-full font-medium hover:bg-sky-500 transition-colors"
          >
            Voir plus
          </a>
        </div>
      </div>
    </section>
  )
}
