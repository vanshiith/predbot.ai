import { test, expect } from '@playwright/test';

test('should display chatbot on page load', async ({ page }) => {
  // Navigate to the page where the chatbot is hosted
  await page.goto('http://localhost:3000/chat'); // Update with your URL
  
  // Verify the chatbot UI is visible
  const chatbot = await page.locator('.chatbot');
  await expect(chatbot).toBeVisible();

  // Ensure there is a welcome message or greeting from the bot
  const welcomeMessage = await page.locator('.chatbot-message');
  await expect(welcomeMessage).toHaveText('Welcome to the StockBot');
});

test('should respond to user input', async ({ page }) => {
    // Navigate to the chatbot page
    await page.goto('http://localhost:3000/chat');
  
    // Type a question into the input box
    await page.fill('.chatbot-input', 'What is your name?');
  
    // Simulate hitting Enter to send the message
    await page.press('.chatbot-input', 'Enter');
  
    // Wait for the response from the chatbot
    const chatbotResponse = await page.locator('.chatbot-message:last-child');
    await expect(chatbotResponse).toHaveText("I'm your friendly stock market conversation bot!");
  });