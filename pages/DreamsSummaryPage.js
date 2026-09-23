// pages/DreamsSummaryPage.js
const { expect } = require('@playwright/test');

class DreamsSummaryPage {
    constructor(page) {
        this.page = page;
    }

    async verifyStatistics() {
        const bodyText = await this.page.textContent('body');
        // Verify stats text presence or elements for summary page
        expect(bodyText).toContain('6'); // Good Dreams count
        expect(bodyText).toContain('4'); // Bad Dreams count
        expect(bodyText).toContain('10'); // Total Dreams count
        expect(bodyText).toContain('2'); // Recurring Dreams count
    }

    async verifyRecurringDreams() {
        const bodyText = await this.page.textContent('body');
        expect(bodyText).toContain('Flying over mountains');
        expect(bodyText).toContain('Lost in maze');
    }
}

module.exports = { DreamsSummaryPage };