// Prefixes root-absolute asset paths with Vite's BASE_URL so images work both
// at the domain root and under a GitHub Pages project subpath.
const BASE = import.meta.env.BASE_URL // e.g. '/' or '/kasper-construction/'

export function asset(path) {
  if (typeof path !== 'string') return path
  if (path.startsWith('/') && !path.startsWith('//')) return BASE + path.slice(1)
  return path
}

// Rewrites a srcSet string ("/img/x-800.webp 800w, ...") to be base-aware.
export function assetSrcSet(srcset) {
  if (!srcset) return srcset
  return srcset
    .split(',')
    .map((part) => {
      const [url, size] = part.trim().split(/\s+/)
      return `${asset(url)}${size ? ` ${size}` : ''}`
    })
    .join(', ')
}
