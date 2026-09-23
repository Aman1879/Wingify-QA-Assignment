# ✨ Dream Portal QA Automation Framework

An automated end-to-end (E2E) testing framework built with **Playwright & JavaScript** for the Wingify QA.

---

## 🛠️ Tech Stack & Design Architecture

* **Test Engine:** Playwright (Node.js)
* **Design Pattern:** **Page Object Model (POM)** for clean separation of test logic, selectors, and maintainability.
* **Assertions:** Built-in strict Playwright `expect` assertions.
* **Reporting:** Rich HTML reports with integrated failure snapshots and traces.
* **Bonus Integration:** Lightweight utility for AI-powered dream text categorization (`Good` vs `Bad`).

---

## 📊 Execution Snapshots & Proof

### Playwright Cross-Browser Test Execution (Dashboard View)
![Dashboard View](screenshots/Dashboard.png)

### Detailed HTML Test Report Overview
![Report Overview](screenshots/Report.png)

## 📂 Project Structure

```text
WingiFy/
├── pages/                  # Page Object Model classes
│   ├── HomePage.js         # Handles home interactions, loaders & multi-tabs
│   ├── DreamsDiaryPage.js  # Validates table records & entry constraints
│   └── DreamsSummaryPage.js# Asserts statistical counts & recurring dreams
├── tests/                  # End-to-end test suites
│   └── dreamPortal.spec.js # Main test script coordinating the workflow
├── utils/                  # Helper utilities
│   └── aiHelper.js         # AI dream classification text helper
├── screenshots/            # Validation and failure artifact captures
├── playwright.config.js    # Global Playwright multi-browser setup
└── package.json            # Project dependencies & scripts
```
## 🚀 Setup & Execution Instructions

1. **Clone the Repository:**
   ```bash
   git clone <your-private-repo-url>
   cd WingiFy

1.Install Dependencies:
Bash
npm install

2.Run the Test Suite:
Bash
npx playwright test

3.View HTML Test Report:
Bash
npx playwright show-report

