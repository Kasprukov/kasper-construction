import meta from '../data/imageMeta.json'
import { asset, assetSrcSet } from '../lib/asset'

/**
 * Responsive image: serves WebP via <source srcset>, falls back to the original,
 * sets intrinsic width/height (no layout shift) and lazy-loads by default.
 * Pre-generate variants with `node scripts/optimize-images.mjs`.
 */
export default function Img({ src, alt = '', className, sizes = '100vw', eager = false, ...rest }) {
  const info = meta[src]
  const webp = info?.webp?.length ? assetSrcSet(info.webp.join(', ')) : null
  const avif = info?.avif?.length ? assetSrcSet(info.avif.join(', ')) : null
  return (
    <picture className="pic">
      {avif && <source type="image/avif" srcSet={avif} sizes={sizes} />}
      {webp && <source type="image/webp" srcSet={webp} sizes={sizes} />}
      <img
        src={asset(src)}
        alt={alt}
        className={className}
        width={info?.w}
        height={info?.h}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={eager ? 'high' : undefined}
        {...rest}
      />
    </picture>
  )
}
