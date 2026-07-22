import type { FeaturesSectionType } from '@/payload-types'
import Image from 'next/image'

export default function FeaturesSection({ date, title, items }: FeaturesSectionType) {
  return (
    <section className="bg-[#eaf8f9] py-16 px-6 md:px-12 lg:px-20 mx-auto max-w-7xl rounded-3xl my-10">
      {/* Section header */}
      <div className="mb-10">
        {date && (
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0f2b3e] mb-3">
            {date}
          </p>
        )}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f2b3e]">{title}</h2>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items?.map((item, index) => {
          const imageUrl = typeof item.featureImage === 'number' ? '' : item.featureImage?.url

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between aspect-4/3 sm:aspect-square hover:shadow-md transition-shadow"
            >
              {/* Icon and status */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    item.status === 'green' ? 'bg-emerald-500' : 'bg-red-500'
                  }`}
                ></span>
                {imageUrl && (
                  <Image src={imageUrl} alt={item.featureTitle} width={24} height={24} />
                )}
              </div>

              {/* Card text */}
              <div className="mt-auto">
                <h3 className="text-xl font-semibold text-[#0f2b3e] mb-1.5 leading-tight">
                  {item.featureTitle}
                </h3>
                {item.featureDescription && (
                  <p className="text-[#0f2b3e] text-sm font-medium opacity-90">
                    {item.featureDescription}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
