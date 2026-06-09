import { chromium } from 'playwright'

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 480, height: 1040 } })
const page = await ctx.newPage()

await page.goto('http://localhost:5173', { waitUntil: 'networkidle' })
// Splash dismiss
await page.waitForTimeout(2500)

// 1) Schedule
await page.screenshot({ path: '/tmp/flow-schedule.png' })
console.log('schedule ok')

// 2) Event Details — tap first DETAILS button (now Saalfelden, not La Molina)
await page.locator('button:has-text("DETAILS")').first().click()
await page.waitForTimeout(900)
await page.screenshot({ path: '/tmp/flow-event-details.png' })
console.log('event-details ok')

await browser.close()
