// Generates responsive WebP variants + a dimensions manifest for /public/img.
// Run: node scripts/optimize-images.mjs   (re-run after adding new images)
import sharp from 'sharp'
import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const dir = 'public/img'
const widths = [640, 1024, 1600]

const files = (await readdir(dir)).filter(
  (f) => /\.(jpe?g|png)$/i.test(f) && !/-\d+\.webp$/i.test(f),
)

const meta = {}
for (const f of files) {
  const input = path.join(dir, f)
  const base = f.replace(/\.(jpe?g|png)$/i, '')
  const m = await sharp(input).metadata()
  const webp = []
  const avif = []
  for (const w of widths) {
    if (m.width && w > m.width) continue
    await sharp(input).resize(w).webp({ quality: 72 }).toFile(path.join(dir, `${base}-${w}.webp`))
    await sharp(input).resize(w).avif({ quality: 50 }).toFile(path.join(dir, `${base}-${w}.avif`))
    webp.push(`/img/${base}-${w}.webp ${w}w`)
    avif.push(`/img/${base}-${w}.avif ${w}w`)
  }
  meta[`/img/${f}`] = { w: m.width, h: m.height, webp, avif }
}

await writeFile('src/data/imageMeta.json', JSON.stringify(meta))
console.log(`Optimized ${files.length} images → ${Object.keys(meta).length} entries`)
