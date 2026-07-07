/** 
 * Test Case: End to end test on Demo E comerece application 
 * 
 * purpose: this test simulates a complete user flow on an e commerece website 
 * 
 * steps:
 * 1) register a new account 
 * 2) logout after registration 
 * 3) login with the same account 
 * 4) search for a product and add it to the tshopping cart 
 * 5) verify cart contents
 * 6) attempts checkout (disabled since it is not avialbe on demo site)
 */

import { test, expect, Page } from "@playwright/test";
import { RegistrationPage } from "../pages/RegistrationPage";
import { HomePage } from "../pages/HomePage";
import { RandomDataUtil } from "../utils/randomDataGenerator";
import { TestConfig } from "../test.config";
import { LogoutPage } from "../pages/LogoutPage";
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { SearchResultPage } from "../pages/SearchResultPage";
import { ProductPage } from "../pages/ProductPage";
import { ShoppingCartPage } from "../pages/ShoppingCartPage";
import { CheckOutPage } from "../pages/CheckOutPage";

//this is the main test block that runs the entire flow

test("Executed the end to end test flow @end-to-end", async ({ page }) => {

    const config = new TestConfig();

    //Navigate to application home page 
    await page.goto(config.appUrl);

    // Step 1: Register a new account and capture the generated email 
    let registeredEmail: string = await perfomRegistration(page);
    console.log("Registration is completed");

    //step 2: Logout after successful registration 
    await perfomLogout(page);
    console.log("Logout is Completed");

    //Step 3: Login with the registered email 
    await perfomeLogin(page, registeredEmail);
    console.log("Login is Completed");

    //Step 4: Search for a product and add it to the cart 
    await addProductToCart(page);
    console.log("Product added to the cart!");

    //step 5: verify the contents of the shopping cart 
    await verifyShoppingCart(page);
    console.log("Shopping cart verification Completed!");

    //step 6: perfome checkOut (skipped for demo site)

    //function to register a new user account 

    async function perfomRegistration(page: Page): Promise<string> {

        const homepage = new HomePage(page);
        await homepage.clickMyAccount();
        await homepage.clickRegister();

        const registrationPage = new RegistrationPage(page);

        //fill in random user details 

        await registrationPage.setFirstName(RandomDataUtil.getFirstName());
        await registrationPage.setLastName(RandomDataUtil.getLastName());

        let email: string = RandomDataUtil.getEmail();
        await registrationPage.setEmail(email);
        await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

        await registrationPage.setPassword("test123");
        await registrationPage.setConfirmPassword("test123");

        await registrationPage.setPrivacyPlicy();
        await registrationPage.clickContinue();

        //validate the registration was ucessful 

        const confirmationMsg = await registrationPage.getConfirmationMsg();
        expect(confirmationMsg).toContain("Your Account Has Been Created");

        return email; // return the email will use for later use in login
    }

    //function to logout for the current user 

    async function perfomLogout(page: Page) {

        const myAccountPage = new MyAccountPage(page);
        const logoutPage: LogoutPage = await myAccountPage.clickLogout();

        // Ensure the "Continue" Button is visible 
        expect(await logoutPage.isContinueButtonVisible()).toBe(true);

        //click "Continue" and verify redirection to HomePage

        await logoutPage.clickOnContinue();

    }

    //function to login using the registered email 

    async function perfomeLogin(page: Page, email: string) {

        const config = new TestConfig();
        await page.goto(config.appUrl);

        const homePage = new HomePage(page);

        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new LoginPage(page);

        //  Missing await fixed
        await loginPage.login(email, "test123");

        //verify login by checking My Account Page

        const myAccountPage = new MyAccountPage(page);

        // Uncomment this after confirming your method works
        expect(await myAccountPage.isMyAccountPageExist()).toBeTruthy();

    }
        //function to search for a product and add it to cart 

    async function addProductToCart(page: Page) {

        const homePage = new HomePage(page);

        const config = new TestConfig();
        const productName: string = config.productName;
        const productQuantity: string = config.productQuantity;

        await homePage.enterProductName(productName);
        await homePage.clickSearch(); //click on search button

        const searchResultPage = new SearchResultPage(page);

        //validate search result page

        expect(await searchResultPage.isSearchResultPageExists()).toBeTruthy();

        //validate that the desired product exists in the results 

        expect(await searchResultPage.isProductExists(productName)).toBeTruthy();

        //select product and set quantity 
        const productPage = await searchResultPage.selectProduct(productName);

        // Optional: uncomment after debugging
         expect(productPage).not.toBeNull();

        await productPage?.setQuantity(productQuantity);

        //  Missing await fixed
        await productPage?.addProductToCart();

        //confirm product was added 
        expect(await productPage?.isConfirmationMessageVisible()).toBe(true);

    }

    //function to verify the shoppping cart details 

    async function verifyShoppingCart(page: Page) {

        const productPage = new ProductPage(page);

        //Navigate to shopping cart from product page

        await productPage.clickItemsToNavigateToCart();
        const shoppingCartPage: ShoppingCartPage = await productPage.clickViewCart();

        console.log("🛒 Navigated to shopping cart!");

        const config = new TestConfig();

        //validate that total price is correct (based on config)

        expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);

    }

});