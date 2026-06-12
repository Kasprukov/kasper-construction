import { useRef, useState } from 'react'
import { asset } from '../lib/asset'

/**
 * Draggable before/after image comparison slider.
 */
export default function BeforeAfter({ before, after, labelBefore = 'До', labelAfter = 'Після' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const setFromClient = (clientX) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    const p = ((clientX - r.left) / r.width) * 100
    setPos(Math.max(0, Math.min(100, p)))
  }
  const onDown = () => { dragging.current = true }
  const onUp = () => { dragging.current = false }
  const onMove = (e) => {
    if (!dragging.current) return
    setFromClient(e.touches ? e.touches[0].clientX : e.clientX)
  }

  return (
    <div
      className="ba"
      ref={ref}
      onMouseDown={(e) => { onDown(); setFromClient(e.clientX) }}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onDown}
      onTouchMove={onMove}
      onTouchEnd={onUp}
    >
      <img className="ba__img" src={asset(after)} alt={labelAfter} draggable="false" />
      <span className="ba__tag ba__tag--after">{labelAfter}</span>
      <div className="ba__clip" style={{ width: `${pos}%` }}>
        <img className="ba__img ba__img--before" src={asset(before)} alt={labelBefore} draggable="false" />
        <span className="ba__tag ba__tag--before">{labelBefore}</span>
      </div>
      <div className="ba__handle" style={{ left: `${pos}%` }} aria-hidden="true">
        <span className="ba__grip">‹ ›</span>
      </div>
    </div>
  )
}
