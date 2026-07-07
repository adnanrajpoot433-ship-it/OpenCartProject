/*

Navigate to the application url 
navigate to login page via homapage
enter valid credentials and login
verify successful login by checking "My Account" page presencne
*/

import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { TestConfig } from "../test.config";




let config: TestConfig;
let homapage: HomePage;
let loginpage: LoginPage
let myAccountPage: MyAccountPage;

//this hook runs before each test 

test.beforeEach(async ({ page }) => {

    config = new TestConfig(); //Load config url credentials
    await page.goto(config.appUrl); //Navigate to Base Url 

    //initialize page objects 
    homapage = new HomePage(page);
    loginpage = new (LoginPage)(page);
    myAccountPage = new (MyAccountPage)(page);
});

//optional cleanup after each teset 

test.afterEach(async ({ page }) => {

    await page.close();

})


test("user login test @master @sanity @regression", async () => {

    //Navigate to login page via home page

    await homapage.clickMyAccount();
    await homapage.clickLogin();



    //Enter valid credentials and login

    await loginpage.setEmail(config.email)
    await loginpage.setPassword(config.password)
    await loginpage.clickLogin();

    //alternatively

    //await loginpage.login(config.email,config.password);

    // verify successful login by checking "My Account" page presencne

    const isLoggedIn = await myAccountPage.isMyAccountPageExist();

    expect(isLoggedIn).toBe(true);


})
