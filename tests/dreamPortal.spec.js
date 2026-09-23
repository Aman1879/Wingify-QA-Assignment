// tests/dreamPortal.spec.js
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { DreamsDiaryPage } = require('../pages/DreamsDiaryPage');
const { DreamsSummaryPage } = require('../pages/DreamsSummaryPage');
const { classifyDreamWithAI } = require('../utils/aiHelper');

test('Dream Portal E2E Functional and AI Validation Test', async ({ page }) => {
    const homePage = new HomePage(page);

    // 1. Home Page & Loader Validation
    await homePage.navigate();
    await homePage.verifyLoaderAndVisibility();

    // 2. Click My Dreams and handle new tabs/windows
    const { newPage1, newPage2 } = await homePage.clickMyDreamsAndGetPages();

    await newPage1.waitForLoadState();
    await newPage2.waitForLoadState();

    // Map pages based on URL dynamically
    let diaryTarget = newPage1.url().includes('diary') ? newPage1 : newPage2;
    let summaryTarget = newPage1.url().includes('total') ? newPage1 : newPage2;

    // 3. Diary Page Validations
    const diaryPage = new DreamsDiaryPage(diaryTarget);
    await diaryPage.validateDiaryEntries();

    // 4. Summary Page Validations
    const summaryPage = new DreamsSummaryPage(summaryTarget);
    await summaryPage.verifyStatistics();
    await summaryPage.verifyRecurringDreams();

    // 5. Bonus AI Validation Check
    const aiResult = await classifyDreamWithAI('Flying over mountains');
    expect(['Good', 'Bad']).toContain(aiResult);
});