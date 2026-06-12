import useLocale from '../hooks/useLocale'

/**
 * Share buttons: uses the native Web Share API when available, with
 * Telegram / Facebook / copy-link fallbacks.
 */
export default function Share({ title }) {
  const { loc } = useLocale()
  const shareLabel = loc({ uk: 'Поділитись', en: 'Share' })
  const url = typeof window !== 'undefined' ? window.location.href : ''

  const native = async () => {
    try {
      if (navigator.share) await navigator.share({ title, url })
    } catch { /* user cancelled */ }
  }
  const copy = async () => {
    try { await navigator.clipboard.writeText(url) } catch { /* ignore */ }
  }

  return (
    <div className="share">
      <span className="share__label">{shareLabel}</span>
      <div className="share__btns">
        {typeof navigator !== 'undefined' && navigator.share && (
          <button className="share__btn" onClick={native} aria-label="Поділитись">↗</button>
        )}
        <a className="share__btn" href={`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" aria-label="Telegram">TG</a>
        <a className="share__btn" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
        <button className="share__btn" onClick={copy} aria-label="Скопіювати посилання">⧉</button>
      </div>
    </div>
  )
}
