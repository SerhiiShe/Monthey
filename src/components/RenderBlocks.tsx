import HeroSection from './blocks/HeroSection'
import FeaturesSection from './blocks/FeaturesSection'
import NewsSliderSection from './blocks/NewsSliderSection'
import CtaSection from './blocks/CtaSection'

// This component accepts an array of blocks from the database.
export function RenderBlocks({ layout }: { layout: any[] }) {
  if (!layout || layout.length === 0) return null

  return (
    <div className="flex flex-col gap-24">
      {layout.map((block, index) => {
        if (block.blockType === 'hero') {
          return <HeroSection key={index} {...block} />
        }

        if (block.blockType === 'news-slider') {
          return <NewsSliderSection key={index} {...block} />
        }

        if (block.blockType === 'features') {
          return <FeaturesSection key={index} {...block} />
        }

        if (block.blockType === 'cta') {
          return <CtaSection key={index} {...block} />
        }

        return null
      })}
    </div>
  )
}
