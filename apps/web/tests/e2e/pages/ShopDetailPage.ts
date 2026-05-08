import { type Locator, type Page } from '@playwright/test'

export class ShopDetailPage {
  readonly page: Page
  readonly modal: Locator
  readonly shopName: Locator
  readonly copyAddressButton: Locator
  readonly tabelogButton: Locator

  constructor(page: Page) {
    this.page = page
    this.modal = page.getByTestId('shop-quick-view')
    this.shopName = this.modal.locator('h2').first()
    this.copyAddressButton = this.modal.getByRole('button').filter({ hasText: /address|住所/i })
    this.tabelogButton = this.modal.getByRole('button').filter({ hasText: /Tabelog/i })
  }

  async waitForModal() {
    await this.modal.waitFor({ state: 'visible' })
  }
}
