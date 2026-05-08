import { expect } from '@playwright/test';
import { test } from './fixtures/auth.fixture';
import { DiscoveryPage } from './pages/DiscoveryPage';

test.describe('Authenticated Features', () => {
  test('should allow authenticated user to favorite a shop', async ({ authenticatedPage }) => {
    const discoveryPage = new DiscoveryPage(authenticatedPage);
    await discoveryPage.goto('en');
    await authenticatedPage.waitForLoadState('networkidle');

    // Wait for cards to potentially load
    try {
      await discoveryPage.restaurantCard().first().waitFor({ state: 'visible', timeout: 5000 });
    } catch (e) {
      // It might be empty, that's fine
    }

    // Make sure we have at least one restaurant card
    const count = await discoveryPage.restaurantCard().count();
    
    // Skip test if no cards are available (empty DB)
    test.skip(count === 0, 'No restaurants found in database to favorite');

    const firstCard = discoveryPage.restaurantCard().first();
    await expect(firstCard).toBeVisible();

    const favoriteButton = firstCard.getByTestId('favorite-button');
    await expect(favoriteButton).toBeVisible();

    // The aria-label toggles between "Add to favorites" and "Remove from favorites"
    const initialState = await favoriteButton.getAttribute('aria-label');
    
    // Click the favorite button
    await favoriteButton.click();

    // Verify it toggled
    if (initialState === 'Add to favorites') {
      await expect(favoriteButton).toHaveAttribute('aria-label', 'Remove from favorites');
      // Click again to cleanup (remove favorite)
      await favoriteButton.click();
      await expect(favoriteButton).toHaveAttribute('aria-label', 'Add to favorites');
    } else {
      await expect(favoriteButton).toHaveAttribute('aria-label', 'Add to favorites');
      // Click again to restore
      await favoriteButton.click();
      await expect(favoriteButton).toHaveAttribute('aria-label', 'Remove from favorites');
    }
  });
});
