// Privacy-friendly analytics loader. No-op until the user consents AND an
// analytics domain/id is provided via env (VITE_PLAUSIBLE_DOMAIN or VITE_GA_ID).
let loaded = false

/** Track a custom event (e.g. CTA click, form submit). No-op until analytics is loaded. */
export function trackEvent(name, props = {}) {
  if (typeof window === 'undefined') return
  if (window.plausible) window.plausible(name, { props })
  if (window.gtag) window.gtag('event', name, props)
}

export function initAnalytics() {
  if (loaded) return
  const plausible = import.meta.env.VITE_PLAUSIBLE_DOMAIN
  const ga = import.meta.env.VITE_GA_ID
  if (!plausible && !ga) return // nothing configured → stay a no-op
  loaded = true

  if (plausible) {
    const s = document.createElement('script')
    s.defer = true
    s.dataset.domain = plausible
    s.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(s)
  }
  if (ga) {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${ga}`
    document.head.appendChild(s)
    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', ga)
  }
}
