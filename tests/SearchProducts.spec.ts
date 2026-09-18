/**
 * Test Case: Search Product 
 * 
 * Tags: @master @regression 
 * 
 * steps: 
 * 1) Naviagate to the application
 * 2) enter the product name in the search field
 * 3) click the search button 
 * 4) verify if the product is displayed in the search results 
 
 */

import{test,expect} from "@playwright/test";
import {HomePage} from "../pages/HomePage";
import {SearchResultPage} from "../pages/SearchResultPage";
import {TestConfig} from "../test.config";

//Declare reusable variables

let config :TestConfig;
let homePage:HomePage;
let searchResultPage:SearchResultPage;

//Playwright hhok runs before each test 

test.beforeEach(async ({page})=>{

config=new TestConfig();

//step:1 Navigate to the page
await page.goto(config.appUrl);


//initialize page objects

homePage=new HomePage(page);
searchResultPage=new SearchResultPage(page);
})

test('Product search test @master @regression', async ()=>{

const productName=config.productName
    //step 2 & 3 enter product name and click search 

    await homePage.enterProductName(productName);
    await  homePage.clickSearch();

 //step 4: verify that search result page is displayed 

  expect(await searchResultPage.isSearchResultPageExists()).toBeTruthy();


  //Step 5: validate if the search product apperares in the results 

  const isProductFound=await searchResultPage.isProductExists(productName);

 expect(isProductFound).toBeTruthy()

})



