import { type Locator, type Page } from '@playwright/test'

export class DiscoveryPage {
  readonly page: Page
  readonly globalSearchInput: Locator
  readonly openNowToggle: Locator
  readonly searchAreaButton: Locator

  constructor(page: Page) {
    this.page = page
    this.globalSearchInput = page.getByTestId('global-search-input').filter({ visible: true }).first()
    this.openNowToggle = page.getByTestId('open-now-toggle').filter({ visible: true }).first()
    this.searchAreaButton = page.getByRole('button', { name: /search this area/i })
  }

  async goto(locale: 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'ko' = 'ja') {
    await this.page.goto(`/${locale}/discovery`)
  }

  async searchFor(text: string) {
    await this.globalSearchInput.fill(text)
    // Wait for debounce
    await this.page.waitForTimeout(500)
  }

  async selectBudget(value: number) {
    await this.page.getByTestId(`budget-filter-${value}`).click()
  }

  async toggleOpenNow() {
    await this.openNowToggle.click()
  }

  getRestaurantCard(id: number) {
    return this.page.getByTestId(`restaurant-card-${id}`)
  }

  restaurantCard() {
    return this.page.getByTestId(/restaurant-card-.+/)
  }

  async clickCard(id: number) {
    await this.getRestaurantCard(id).click()
  }
}
