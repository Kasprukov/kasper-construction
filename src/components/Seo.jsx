import { Helmet } from 'react-helmet-async'

const SITE = 'https://kasper.ua'
const DEFAULT_OG =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'

/**
 * Per-page SEO: title, description, canonical, Open Graph + optional JSON-LD.
 */
export default function Seo({ title, description, path = '', image = DEFAULT_OG, jsonLd }) {
  const fullTitle = title ? `${title} — Kasper` : 'Kasper — будівництво та інтерʼєри під ключ'
  const url = `${SITE}${path}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}

export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Kasper',
  url: SITE,
  telephone: '+380951793853',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'вул. Велика Васильківська, 100',
    addressLocality: 'Київ',
    addressCountry: 'UA',
  },
  areaServed: 'UA',
  sameAs: ['https://instagram.com/', 'https://facebook.com/'],
}
