import { chromium } from 'playwright'

const url = 'http://localhost:5173'

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 480, height: 1040 } })
const page = await ctx.newPage()

await page.goto(url, { waitUntil: 'networkidle' })
// Wait for splash to dismiss
await page.waitForTimeout(2500)

// 1) SCHEDULE — default landing
await page.screenshot({ path: '/tmp/flow-schedule.png' })
console.log('schedule ok')

// 2) EVENT DETAILS — tap the first event's DETAILS button
await page.locator('button:has-text("DETAILS")').first().click()
await page.waitForTimeout(800)
await page.screenshot({ path: '/tmp/flow-event-details.png' })
console.log('event-details ok')

// Close sheet
await page.locator('button[aria-label="Close"]').first().click().catch(async () => {
  // Fallback: close icon X is usually labelled differently
  await page.keyboard.press('Escape')
})
await page.waitForTimeout(400)

// 3) RANKINGS
await page.locator('button[aria-label="RANKINGS"]').click()
await page.waitForTimeout(800)
await page.screenshot({ path: '/tmp/flow-rankings.png' })
console.log('rankings ok')

// 4) RIDER DETAILS — tap the hero block (first leader card)
// The hero block is the big P01 card at the top
await page.locator('button:has(:text("CURRENT LEADER"))').first().click().catch(async () => {
  // fallback: just click the first rider row
  await page.locator('button:has-text("HÖLL")').first().click().catch(() => {})
})
await page.waitForTimeout(800)
await page.screenshot({ path: '/tmp/flow-rider-details.png' })
console.log('rider-details ok')

// Close sheet
await page.locator('button[aria-label="Close"]').first().click().catch(async () => {
  await page.keyboard.press('Escape')
})
await page.waitForTimeout(400)

// 5) LIVE
await page.locator('button[aria-label="LIVE"]').click()
await page.waitForTimeout(800)
await page.screenshot({ path: '/tmp/flow-live.png' })
console.log('live ok')

await browser.close()
console.log('done')
