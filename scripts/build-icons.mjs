// Rasterizes the brutalist source SVGs into the PNG sizes a PWA needs.
// Run: node scripts/build-icons.mjs
import { promises as fs } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const PUBLIC = resolve(ROOT, 'public')

const main = resolve(__dirname, 'source-icon.svg')
const maskable = resolve(__dirname, 'maskable-icon.svg')

async function emit(svgPath, outPath, size) {
  const buf = await fs.readFile(svgPath)
  await sharp(buf, { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(outPath)
  console.log(`  ✓ ${outPath.replace(ROOT, '')}  (${size}×${size})`)
}

async function run() {
  await fs.mkdir(PUBLIC, { recursive: true })

  console.log('Generating PNG icons…')
  await emit(main,     resolve(PUBLIC, 'icon-192.png'),         192)
  await emit(main,     resolve(PUBLIC, 'icon-512.png'),         512)
  await emit(maskable, resolve(PUBLIC, 'icon-maskable-512.png'), 512)
  // iOS apple-touch-icon: 180×180, square, no transparency required.
  await emit(main,     resolve(PUBLIC, 'apple-touch-icon.png'), 180)
  // Favicon (single 32×32 PNG works on every modern browser).
  await emit(main,     resolve(PUBLIC, 'favicon-32.png'),        32)

  console.log('Done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
