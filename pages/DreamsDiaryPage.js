// pages/DreamsDiaryPage.js
const { expect } = require('@playwright/test');

class DreamsDiaryPage {
    constructor(page) {
        this.page = page;
        this.tableRows = page.locator('table tr');
    }

    async validateDiaryEntries() {
        await this.page.waitForLoadState('load');
        const rows = await this.tableRows.all();

        expect(rows.length).toBeGreaterThanOrEqual(10);

        for (let i = 1; i < rows.length; i++) {
            const cols = await rows[i].locator('td').all();
            if (cols.length >= 3) {
                const dreamName = await cols[0].textContent();
                const daysAgo = await cols[1].textContent();
                const dreamType = await cols[2].textContent();

                expect(dreamName.trim()).not.toBe('');
                expect(daysAgo.trim()).not.toBe('');
                expect(['Good', 'Bad']).toContain(dreamType.trim());
            }
        }
    }
}

module.exports = { DreamsDiaryPage };