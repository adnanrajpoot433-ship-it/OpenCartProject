/*

Test Case: Account registration


Tags: @master @sanity @regression

steps: 
Navigate to application Url
Go to my account and click register
fill in registration details with random data 
agree to privacy policy and submit the form 
validate the confirmation message 

*/


import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { RandomDataUtil } from "../utils/randomDataGenerator";
import { TestConfig } from "../test.config";


let homepage: HomePage;
let registrationPage: RegistrationPage;


test.beforeEach(async ({ page }) => {


  //first we needs to get url and for that acess we first make the object for that class 
  const Config = new TestConfig();

  //Navigate to URl 
  await page.goto(Config.appUrl);

  //Go to my account and click register
  homepage = new HomePage(page);

  registrationPage = new RegistrationPage(page);

})

test.afterEach(async ({ page }) => {


  await page.close();

})








test("User Registration Test @master @sanity @regression", async ({ }) => {



  //Go to my account and click register

  await homepage.clickMyAccount();
  await homepage.clickRegister();

  //fill in registration details with random data 


  await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  await registrationPage.setLastName(RandomDataUtil.getLastName());
  await registrationPage.setEmail(RandomDataUtil.getEmail());
  const password = RandomDataUtil.getPassword();

  await registrationPage.setPassword(password);
  await registrationPage.setConfirmPassword(password);
  await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber())
  await registrationPage.setPrivacyPlicy();
  await registrationPage.clickContinue();

  //validate the confirmation message 
  const confirmationmsg = await registrationPage.getConfirmationMsg();

  expect(confirmationmsg).toContain('Your Account Has Been Created');




})