import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTop } from '../hooks/useLenis'

// Resets scroll + moves focus to <main> on every route change (a11y).
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    scrollToTop(true)
    const main = document.getElementById('main')
    if (main) {
      // Focus without scrolling so the smooth reset above isn't interrupted.
      main.focus({ preventScroll: true })
    }
  }, [pathname])
  return null
}
