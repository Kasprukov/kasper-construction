import { useTranslation } from 'react-i18next'
import { localize } from '../lib/localize'

/**
 * Current language + a `loc()` resolver that localizes any value or structure
 * containing { uk, en } leaves. Use for content that lives in data files /
 * inline page copy (the UI chrome stays in i18n via useTranslation/t).
 */
export default function useLocale() {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'uk'
  return { lang, loc: (node) => localize(node, lang) }
}
