import Link from 'next/link'
import type { HeroSectionType } from '@/payload-types'
import { MagnifyingGlassIcon } from '../ui/icons/MagnifyingGlassIcon'
import { PlusIcon } from '../ui/icons/PlusIcon'

export default function HeroSection({
  image,
  searchPlaceholder,
  linksTitle,
  links,
  selectTitle,
  selectPlaceholder,
  selectOptions,
}: HeroSectionType) {
  const imageUrl = typeof image === 'number' ? '' : image?.url

  return (
    <section
      className="relative flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      {/* Darkening the background */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content container, centered */}
      <div className="relative z-10 flex flex-col h-full container mx-auto mt-auto px-6">
        {/* Central part: Search bar */}
        <div className="grow flex items-center mt-40 mb-20 justify-center">
          <form className="relative w-full max-w-2xl mx-auto bg-white rounded-full shadow-2xl flex items-center p-2 md:p-3">
            <input
              type="search"
              placeholder={searchPlaceholder || ''}
              className="min-w-40 grow md:text-xl text-lg px-4 py-3 text-gray-700 bg-transparent placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 flex items-center justify-center h-12 w-12 md:h-14 md:w-14 bg-sky-600 rounded-full text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200 shadow-md"
            >
              <MagnifyingGlassIcon />
            </button>
          </form>
        </div>

        {/* Bottom panel */}
        <div className="lg:flex-row mt-auto flex flex-col gap-0 text-white rounded-t-3xl overflow-hidden shadow-2xl">
          {/* Left side of the panel: Tag buttons */}
          <div className="w-full py-8 px-4 md:px-8 bg-[#0f2b3e]/90 flex flex-col lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-semibold md:mb-8 mb-6">{linksTitle}</h2>
            <div className="flex flex-wrap gap-x-4 gap-y-3">
              {links?.map(({ label, url }, index) => (
                <Link
                  key={index}
                  href={url}
                  className="px-4 py-2 border-2 border-white/40 bg-[#0a1e2b]/60 rounded-full text-lg font-medium hover:bg-white/10 hover:border-white focus:outline-none focus:ring-2 focus:ring-white whitespace-nowrap"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side of the panel: Select */}
          <div className="w-full py-8 px-4 md:px-8 bg-[#00acee] flex flex-col lg:w-1/3">
            <h2 className="text-4xl font-semibold mb-8">{selectTitle}</h2>

            {/* Select */}
            <div className="relative mt-auto">
              <select
                defaultValue=""
                className="w-full h-18 pl-8 pr-24 bg-white/60 md:text-xl text-lg text-gray-800 rounded-full focus:outline-none appearance-none cursor-pointer"
              >
                <option value="">{selectPlaceholder}</option>
                {selectOptions?.map(({ label, value }) => {
                  return (
                    <option key={value} value={label}>
                      {label}
                    </option>
                  )
                })}
              </select>
              {/* Plus button */}
              <button className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center justify-center h-12 w-12 md:h-14 md:w-14 bg-sky-600 rounded-full text-white hover:bg-sky-700 focus:outline-none shadow-md pointer-events-none">
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
