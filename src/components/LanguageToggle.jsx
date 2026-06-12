import { useTranslation } from 'react-i18next'

export default function LanguageToggle({ className = '' }) {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'uk'
  const next = lang === 'uk' ? 'en' : 'uk'

  return (
    <button
      className={`lang-toggle ${className}`.trim()}
      onClick={() => i18n.changeLanguage(next)}
      aria-label={`Switch language to ${next.toUpperCase()}`}
    >
      <span className={`lang-toggle__opt${lang === 'uk' ? ' lang-toggle__opt--active' : ''}`}>UA</span>
      <span className="lang-toggle__sep">/</span>
      <span className={`lang-toggle__opt${lang === 'en' ? ' lang-toggle__opt--active' : ''}`}>EN</span>
    </button>
  )
}
