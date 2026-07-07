/**
 * 
 * Test Case Product add to cart 
 * 
 * tags @master @regression
 * 
 * Steps: 
 * 1) Navigate to application url 
 * 2) Enter an existing product name in the search box 
 * 3) click the search button 
 * 4) verify the product appear in the search box 
 * 5) select the product 
 * 6) set quantity 
 * 7) add product to the cart 
 * 8) verify the sucess message 
 *
 * 
 */

import { test, expect } from "@playwright/test";
import { TestConfig } from "../test.config";
import { HomePage } from "../pages/HomePage";
import { SearchResultPage } from "../pages/SearchResultPage";
import { ProductPage } from "../pages/ProductPage";

//Shared instances 

let config: TestConfig;
let homepage: HomePage;
let searchResultPage: SearchResultPage;
let productPage: ProductPage;

test.beforeEach(async ({ page }) => {

    config = new TestConfig();

    //Step 1: open application Url 
    await page.goto(config.appUrl);




    homepage = new HomePage(page)
    searchResultPage = new SearchResultPage(page)
    productPage = new ProductPage(page)


});

test("add product to the cart test master @regression", async ({ page }) => {

    //step 2: Enter product name in search box 

    await homepage.enterProductName(config.productName);

    //Step 3: Click the search button

    await homepage.clickSearch();

    //Step 4: verify search result page is displayed 

    expect(await searchResultPage.isSearchResultPageExists()).toBeTruthy()

    //step 5: verify that the product exists in the results 

    const ProductName = config.productName
    expect(await searchResultPage.isProductExists(config.productName)).toBeTruthy();

    //Step 6-7-8 : select product -> set quantity -> add to cart -> verify confirmation

    if (await searchResultPage.isProductExists(ProductName)) {

        await searchResultPage.selectProduct(ProductName);
        await productPage.setQuantity(config.productQuantity); // Set quantity 
        await productPage.addProductToCart(); // add to cart 

        //Step 8: Assert sucess message is visible 

        expect(await productPage.isConfirmationMessageVisible()).toBeTruthy()
    }

});

