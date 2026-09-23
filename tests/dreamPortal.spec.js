
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { DreamsDiaryPage } = require('../pages/DreamsDiaryPage');
const { DreamsSummaryPage } = require('../pages/DreamsSummaryPage');
const { classifyDreamWithAI } = require('../utils/aiHelper');

test('Dream Portal E2E Functional and AI Validation Test', async ({ page }) => {
    const homePage = new HomePage(page);


    await homePage.navigate();
    await homePage.verifyLoaderAndVisibility();


    const { newPage1, newPage2 } = await homePage.clickMyDreamsAndGetPages();

    await newPage1.waitForLoadState();
    await newPage2.waitForLoadState();

    let diaryTarget = newPage1.url().includes('diary') ? newPage1 : newPage2;
    let summaryTarget = newPage1.url().includes('total') ? newPage1 : newPage2;

    const diaryPage = new DreamsDiaryPage(diaryTarget);
    await diaryPage.validateDiaryEntries();


    const summaryPage = new DreamsSummaryPage(summaryTarget);
    await summaryPage.verifyStatistics();
    await summaryPage.verifyRecurringDreams();


    const aiResult = await classifyDreamWithAI('Flying over mountains');
    expect(['Good', 'Bad']).toContain(aiResult);
});