/**
 * Ambient "blueprint" grid: thin technical-drawing lines (minor + major) that
 * slowly drift. Pure CSS; a radial mask fades it out behind centre content so
 * text stays clean, and animation is disabled for prefers-reduced-motion.
 */
export default function BlueprintGrid() {
  return <div className="grid-bg" aria-hidden="true" />
}
