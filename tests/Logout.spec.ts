/**
 * Test case: User Logout 
 * 
 * Tags: @master @regression 
 * 
 * steps: 
 * 1)Navigate to the application Url 
 * 2) Go to Login page from Home page
 * 3) login with valid credentials 
 * 4) verify My Account page
 * 5) Click on Logout link 
 * 6) click on continue button 
 * 7) verify user is restricted to home page 
 
 */

import{test,expect} from "@playwright/test"
import{TestConfig} from "../test.config"
import { HomePage } from "../pages/HomePage"
import{LoginPage} from "../pages/LoginPage";
import{MyAccountPage,} from "../pages/MyAccountPage";
import { LogoutPage } from "../pages/LogoutPage";

//Declared shared varaiblaes

let config:TestConfig;
let homePage: HomePage;
let loginPage:LoginPage;
let myAccountPage:MyAccountPage;
let logoutPage:LogoutPage;

//Setup before each Test 

test.beforeEach(async({page})=>{
config=new TestConfig(); // load testing config 
await page.goto(config.appUrl); // step 1: navigate to app url

//Initialize page objects 

homePage=new HomePage(page);
loginPage=new LoginPage(page);
myAccountPage=new MyAccountPage(page);

});



test("User Logout test @master @regression",async()=>{

//step 2: Navigate to Login page

await homePage.clickMyAccount();
await homePage.clickLogin();

//step 3: Perfome login using valid credentials 

 await loginPage.login(config.email,config.password);


 //step 4: verify sucessful login 

  expect (await myAccountPage.isMyAccountPageExist()).toBeTruthy()
    
 // step 5: Click logout, which returns LogoutPage instance 

  logoutPage = await myAccountPage.clickLogout();

  //Step 6: verify "Continue" button is visible before clicking 

  expect(await logoutPage.isContinueButtonVisible()).toBe(true);

 // step 7: Click Continue and verify redirection to HomePage 

 homePage=await logoutPage.clickOnContinue();
 


})
















