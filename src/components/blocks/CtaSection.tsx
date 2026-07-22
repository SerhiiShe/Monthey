import Link from 'next/link'

export default function CtaSection({ badgeText, title, buttonText, buttonLink }: any) {
  return (
    <section className="bg-[#eef9fb] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        <div className="flex-1 space-y-6">
          {badgeText && (
            <div className="inline-block rounded-full border border-sky-900/30 px-5 py-2">
              <span className="text-sm font-medium text-sky-950">{badgeText}</span>
            </div>
          )}

          <h2 className="text-4xl md:text-5xl font-medium text-[#0f304b] leading-tight tracking-tight">
            {title}
          </h2>
        </div>

        {buttonText && buttonLink && (
          <div className="shrink-0">
            <Link
              href={buttonLink}
              className="inline-block rounded-full bg-[#009dff] px-8 py-4 text-lg font-semibold text-white hover:bg-blue-500 transition-colors duration-200"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
