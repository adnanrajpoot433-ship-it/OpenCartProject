import { Page, Locator, expect } from "@playwright/test";

export class HomePage {

    private readonly page: Page;

    // Locators
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;

    // Constructor
    constructor(page: Page) {

        this.page = page;

        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.locator('a:has-text("Register")');
        this.lnkLogin = page.locator('a:has-text("Login")');
        this.txtSearchBox = page.locator('input[placeholder="Search"]');
        this.btnSearch = page.locator('.btn.btn-default.btn-lg');
    }


    //actions

    // Verify Home Page
    async verifyHomePage(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    // Click My Account
    async clickMyAccount() {
        await this.lnkMyAccount.click();
    }

    // Click Register
    async clickRegister() {
        await this.lnkRegister.click();
    }

    // Click Login
    async clickLogin() {
        await this.lnkLogin.click();
    }

    // Enter Product Name
    async enterProductName(productName: string) {
        await this.txtSearchBox.fill(productName);
    }

    // Click Search
    async clickSearch() {
        await this.btnSearch.click();
    }

    // Search Product
    async searchProduct(productName: string) {
        await this.enterProductName(productName);
        await this.clickSearch();
    }

}