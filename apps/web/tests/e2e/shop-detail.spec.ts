import { test, expect } from '@playwright/test'
import { DiscoveryPage } from './pages/DiscoveryPage'
import { ShopDetailPage } from './pages/ShopDetailPage'

const locales = ['ja', 'en'] as const

for (const locale of locales) {
  test.describe(`Shop Detail Page (${locale})`, () => {
    let discoveryPage: DiscoveryPage
    let shopDetailPage: ShopDetailPage

    test.beforeEach(async ({ page }) => {
      discoveryPage = new DiscoveryPage(page)
      shopDetailPage = new ShopDetailPage(page)
      await discoveryPage.goto(locale)
      await page.waitForLoadState('networkidle')
    })

    test('clicking restaurant card opens shop detail modal', async ({ page }) => {
      const cards = discoveryPage.restaurantCard()
      await expect(cards.first()).toBeVisible({ timeout: 10000 })
      
      await cards.first().click()
      await shopDetailPage.waitForModal()
      
      await expect(shopDetailPage.shopName).toBeVisible()
    })

    test('direct route /shops/:id loads shop detail modal over discovery', async ({ page }) => {
      const cards = discoveryPage.restaurantCard()
      await expect(cards.first()).toBeVisible()
      
      // Get the ID of the first card from its testid
      const idAttr = await cards.first().getAttribute('data-testid')
      const shopId = idAttr?.replace('restaurant-card-', '')
      
      expect(shopId).toBeDefined()
      
      // Navigate directly
      await page.goto(`/${locale}/discovery?shopId=${shopId}`)
      await shopDetailPage.waitForModal()
      
      await expect(shopDetailPage.shopName).toBeVisible()
    })
  })
}
