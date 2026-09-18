import { Page, Locator } from "@playwright/test";
import { HomePage } from "./HomePage";

export class LogoutPage {

    private readonly page: Page;
    private readonly msgHeading: Locator;
    private readonly btnContinue: Locator;

    constructor(page: Page) {

        this.page = page;
        this.msgHeading = page.getByRole('heading', {
            name: 'Account Logout',
            level: 1
        });
        this.btnContinue = page.getByRole('link', { name: 'Continue' });

    }

    async isLogoutPageExist(): Promise<boolean> {

        return await this.msgHeading.isVisible();

    }

    async clickContinue(): Promise<void> {

        await this.btnContinue.click();

    }

    async clickOnContinue(): Promise<HomePage> {

        await this.btnContinue.click();
        return new HomePage(this.page);

    }

    async isContinueButtonVisible(): Promise<boolean> {

        return await this.btnContinue.isVisible();

    }

    async getPageTitle(): Promise<string> {

        return await this.page.title();

    }

}
