import Link from 'next/link'
import configPromise from '@payload-config'
import { MontheyLogoSymbol } from './ui/icons/MontheyLogoSymbol'
import { ChevronDownIcon } from './ui/icons/ChevronDownIcon'
import type { Footer } from '@/payload-types'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'

export default async function Footer() {
  const draft = await draftMode()
  const isDraftMode = draft.isEnabled
  const payload = await getPayload({ config: configPromise })
  const {
    formLable,
    formPlaceholder,
    formButtonText,
    contactTitle,
    contactAddress,
    contactPhone1,
    contactPhone2,
    contactEmail,
    selectTitle,
    selectPlaceholder,
    selectOptions,
    socialMediaTitle,
    socialMediaLinks,
    pageLinksTitle,
    pageLinks,
    copyright,
    bottomLinks,
    developerName,
    developerLink,
  } = await payload.findGlobal({
    slug: 'footer',
    draft: isDraftMode,
  })

  return (
    <footer className="bg-[#032948] text-white pt-16 pb-6 px-6 lg:px-12 font-sans">
      <div className="max-w-350 mx-auto">
        {/* Upper part (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Logo and Newsletter */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <MontheyLogoSymbol />
            </Link>

            <div>
              <h3 className="text-xl font-semibold mb-4">{formLable}</h3>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={formPlaceholder || 'Votre adresse mail'}
                  className="bg-[#244b67] text-white placeholder:text-white/70 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-auto grow"
                />
                <button
                  type="submit"
                  className="bg-white text-[#032948] font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition-colors whitespace-nowrap"
                >
                  {formButtonText}
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Contacts */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">{contactTitle}</h3>
              <address className="not-italic text-[15px] leading-relaxed opacity-90">
                <span>{contactAddress}</span>
                <br />
                <a href={'tel:+' + contactPhone1}>{contactPhone1}</a>
                <br />
                <a href={'tel:+' + contactPhone2}>{contactPhone2}</a>
                <br />
                <a href={'mailto:' + contactEmail} className="hover:underline">
                  {contactEmail}
                </a>
              </address>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">{selectTitle}</h3>
              <div className="relative max-w-70">
                <select
                  defaultValue=""
                  className="w-full bg-transparent border border-white/50 text-white px-5 py-2.5 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
                >
                  <option value="" disabled className="text-gray-800">
                    {selectPlaceholder}
                  </option>
                  {selectOptions?.map((option) => (
                    <option key={option.id} value={option.value} className="text-gray-800">
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                  <ChevronDownIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Social Media and Information */}
          <div className="flex flex-col gap-10 lg:pl-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">{socialMediaTitle}</h3>
              <div className="flex items-center gap-4">
                {socialMediaLinks?.map((link) => {
                  const imageUrl =
                    typeof link.socialMediaImage !== 'number' && link.socialMediaImage.url
                      ? link.socialMediaImage.url
                      : ''
                  return (
                    <a
                      key={link.id}
                      href={link.socialMediaLink}
                      className="hover:text-sky-300 transition-colors"
                      aria-label="Facebook"
                    >
                      <img width="auto" height="auto" src={imageUrl} />
                    </a>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">{pageLinksTitle}</h3>
              <ul className="flex flex-col gap-3 text-[15px] opacity-90">
                {pageLinks?.map((link) => (
                  <li key={link.id}>
                    <Link href={link.pageLink} className="hover:underline hover:opacity-100">
                      {link.pageName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Panel (Copyright and Links) */}
        <div className="border-t border-white/20 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-xs font-medium text-white/80">
          <p>{copyright}</p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {bottomLinks?.map((link) => (
              <li key={link.id}>
                <Link href={link.bottomLink} className="hover:underline hover:opacity-100">
                  {link.bottomLinkText}
                </Link>
              </li>
            ))}
          </div>

          <a href={developerLink || '#'} target="_blank">
            {developerName}
          </a>
        </div>
      </div>
    </footer>
  )
}
