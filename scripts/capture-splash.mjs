import { chromium } from 'playwright'

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 480, height: 1040 } })
const page = await ctx.newPage()

// Land on the page; splash starts immediately and lives ~1.9s + 400ms fade.
// We catch it ~800ms in — well before the exit animation begins.
await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(800)
await page.screenshot({ path: '/tmp/flow-splash.png' })
console.log('splash captured')
await browser.close()
