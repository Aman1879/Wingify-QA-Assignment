// pages/HomePage.js
const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.mainContent = page.locator('#content, .main-content');
    this.myDreamsBtn = page.locator('text=My Dreams');
  }

  async navigate() {
    await this.page.goto('https://arjitnigam.github.io/myDreams/');
  }

  async verifyLoaderAndVisibility() {
    await this.page.waitForTimeout(3500);
    await expect(this.mainContent).toBeVisible();
    await expect(this.myDreamsBtn).toBeVisible();
  }

  async clickMyDreamsAndGetPages() {
    const [newPage1, newPage2] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.context().waitForEvent('page'),
      this.myDreamsBtn.click()
    ]);
    return { newPage1, newPage2 };
  }
}

module.exports = { HomePage };