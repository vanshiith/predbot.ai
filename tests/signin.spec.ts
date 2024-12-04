import { test, expect } from '@playwright/test';

test.describe('Sign-In Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/login'); // Replace with your actual URL path
  });

  test('should load the sign-in page', async ({ page }) => {
    await expect(page).toHaveTitle(/Log In/i); // Check if the page title contains "Sign In"
    await expect(page.locator('h1')).toHaveText('Log In'); // Check if the page header is correct
  });

  // test('should show validation errors for empty fields', async ({ page }) => {
  //   await page.click('button[type="submit"]'); // Trigger form submission
  //   await expect(page.locator('#email-error')).toHaveText('Email is required'); // Assuming an error element exists
  //   await expect(page.locator('#password-error')).toHaveText('Password is required');
  // });

  test('should sign in with valid credentials', async ({ page }) => {
    await page.fill('#email', 'test@example.com'); // Replace with test credentials
    await page.fill('#password', 'password123');
    await page.click('button[type="submit"]');

    // Check if navigation or success message occurs
    await expect(page).toHaveURL('http://localhost:3000/dashboard'); // Replace with the expected path
    await expect(page.locator('h1')).toHaveText('Dashboard');
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.fill('#email', 'test@gmail.com'); // Replace with test credentials
    await page.fill('#password', 'wrongpassword');
    await page.click('button[type="submit"]');

    // Check for an error message
    await expect(page.locator('#login-error'))//.toHaveText('Invalid email or password');
  });
});
