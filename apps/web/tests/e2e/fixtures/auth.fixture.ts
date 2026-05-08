import { test as base, expect, Page } from '@playwright/test';

type AuthFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page, request }, use) => {
    // 1. Generate unique test user
    const uniqueId = Date.now();
    const testEmail = `testuser-${uniqueId}@example.com`;
    const testPassword = 'Password123!';
    const testName = `Test User ${uniqueId}`;

    // 2. Sign up via API directly to the auth endpoint
    // We use page.request so the cookie automatically binds to the page's context.
    const response = await page.request.post('http://localhost:8999/api/auth/sign-up/email', {
      data: {
        email: testEmail,
        password: testPassword,
        name: testName,
      },
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok()) {
      const errorText = await response.text();
      throw new Error(`Failed to sign up test user: ${response.status()} ${errorText}`);
    }

    // 3. Provide the authenticated page to the test
    await use(page);

    // 4. Cleanup: delete the test user to prevent DB pollution
    try {
      // Sign out first (Better Auth requires active session for delete)
      await page.request.post('http://localhost:8999/api/auth/sign-out', {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      // Ignore sign-out errors during cleanup
    }
  },
});

export { expect };

