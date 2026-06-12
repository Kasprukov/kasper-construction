import { useEffect } from 'react'

const SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

/**
 * Traps Tab focus inside `ref` while `active`, and restores focus on close.
 */
export default function useFocusTrap(ref, active) {
  useEffect(() => {
    if (!active || !ref.current) return
    const node = ref.current
    const prev = document.activeElement
    const focusables = () => Array.from(node.querySelectorAll(SELECTOR)).filter((el) => el.offsetParent !== null)

    focusables()[0]?.focus()

    const onKey = (e) => {
      if (e.key !== 'Tab') return
      const items = focusables()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    node.addEventListener('keydown', onKey)
    return () => {
      node.removeEventListener('keydown', onKey)
      if (prev instanceof HTMLElement) prev.focus()
    }
  }, [ref, active])
}
