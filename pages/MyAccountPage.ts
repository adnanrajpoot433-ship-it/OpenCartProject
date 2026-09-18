
import { Page, Locator } from "@playwright/test";
import { LogoutPage } from "./LogoutPage";

export class MyAccountPage {

    private readonly page: Page;

    // Locators
    private readonly msgHeading: Locator;
    private readonly linkLogout: Locator;

    // Constructor
    constructor(page: Page) {

        this.page = page;

        this.msgHeading = page.getByRole('heading', {
            name: 'My Account',
            level: 2
        });

        this.linkLogout = page.getByRole('link', {
            name: 'Logout'
        });

    }

    // Check whether My Account page exists
    async isMyAccountPageExist(): Promise<boolean> {

        return await this.msgHeading.isVisible();

    }

    // Click logout
    async clickLogout(): Promise<LogoutPage> {

        await this.linkLogout.click();

        return new LogoutPage(this.page);

    }

    // Get page title
    async getPageTitle(): Promise<string> {

        return await this.page.title();

    }

}
