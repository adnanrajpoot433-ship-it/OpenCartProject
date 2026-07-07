import { test, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { DataProvider } from "../utils/dataProviders"
import { TestConfig } from "../test.config";
import { HomePage } from "../pages/HomePage";

//Load json test data from the file  logindata json 

const JsonPath = "TestData/loginData.json";

const JsonTestData = DataProvider.getTesdtDataFromJson(JsonPath);

for (const data of JsonTestData) {

    test(`Login test With Json Data: ${data.testName} @datadriven`, async ({ page }) => {

        const config = new TestConfig();
        await page.goto(config.appUrl);

        const homePage = new HomePage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new LoginPage(page);
        await loginPage.login(data.email, data.password)


        if(data.expected.toLowerCase()==="success")
        {

            const myAccountPage=new MyAccountPage(page);
            const isLoggedIn=await myAccountPage.isMyAccountPageExist();
            expect(isLoggedIn).toBeTruthy();
        } 
        else 
        {
         const errorMessage=await loginPage.getLoginErrorMessage();
          expect(errorMessage).toBe('Warning: No match for E-mail Address and/or Password.')

        }

    })


}
