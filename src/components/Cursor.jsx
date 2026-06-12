import { useEffect, useRef, useState } from 'react'

/**
 * Custom cursor: a small dot + a lagging ring that grows over interactive
 * elements. Disabled on touch devices and for reduced-motion users.
 */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)
    document.body.classList.add('has-cursor')

    let rx = window.innerWidth / 2
    let ry = window.innerHeight / 2
    let mx = rx
    let my = ry
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px)`
      const over = e.target.closest('a, button, [data-cursor]')
      ring.current?.classList.toggle('cursor__ring--hover', !!over)
    }
    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-cursor')
    }
  }, [])

  if (!enabled) return null
  return (
    <>
      <div className="cursor__dot" ref={dot} aria-hidden="true" />
      <div className="cursor__ring" ref={ring} aria-hidden="true" />
    </>
  )
}
