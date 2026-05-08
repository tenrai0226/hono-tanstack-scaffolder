import { test, expect } from '@playwright/test'
import { DiscoveryPage } from './pages/DiscoveryPage'

const locales = ['ja', 'en'] as const

for (const locale of locales) {
  test.describe(`Discovery Page (${locale})`, () => {
    let discoveryPage: DiscoveryPage

    test.beforeEach(async ({ page }) => {
      discoveryPage = new DiscoveryPage(page)
      await discoveryPage.goto(locale)
      
      // Wait for network idle or initial load
      await page.waitForLoadState('networkidle')
    })

    test('page loads and renders restaurant cards', async ({ page }) => {
      const cards = page.getByTestId(/restaurant-card-.+/)
      await expect(cards.first()).toBeVisible({ timeout: 10000 })
      const count = await cards.count()
      expect(count).toBeGreaterThan(0)
    })

    test('budget filter updates URL', async ({ page }) => {
      await discoveryPage.selectBudget(3000)
      await expect(page).toHaveURL(/.*budget=3000.*/)
    })

    test('open-now toggle updates URL', async ({ page }) => {
      await discoveryPage.toggleOpenNow()
      await expect(page).toHaveURL(/.*openNow=true.*/)
    })

    test('search input triggers API with query', async ({ page }) => {
      await discoveryPage.searchFor('sushi')
      await expect(page).toHaveURL(/.*q=sushi.*/)
    })

    test('no MISSING_MESSAGE errors in console', async ({ page }) => {
      const errors: string[] = []
      page.on('console', msg => {
        if (msg.type() === 'error' && msg.text().includes('MISSING_MESSAGE')) {
          errors.push(msg.text())
        }
      })
      
      await discoveryPage.goto(locale)
      await page.waitForLoadState('networkidle')
      expect(errors).toHaveLength(0)
    })
  })
}
