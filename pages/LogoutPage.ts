import { Page, Locator } from "@playwright/test";

export class LogoutPage {

    private readonly page: Page;

    // Locators
    private readonly msgHeading: Locator;
    private readonly btnContinue: Locator;

    // Constructor
    constructor(page: Page) {

        this.page = page;

        this.msgHeading = page.getByRole('heading', {
            name: 'Account Logout',
            level: 1
        });

        this.btnContinue = page.getByRole('link', {
            name: 'Continue'
        });

    }

    // Check whether Logout page exists
    async isLogoutPageExist(): Promise<boolean> {

        return await this.msgHeading.isVisible();

    }

    // Click Continue button
    async clickContinue(): Promise<void> {

        await this.btnContinue.click();

    }

    // Get page title
    async getPageTitle(): Promise<string> {

        return await this.page.title();

    }

}

