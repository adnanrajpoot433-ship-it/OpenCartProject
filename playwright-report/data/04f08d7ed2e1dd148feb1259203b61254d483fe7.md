# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndtoEndTest.spec.ts >> Executed the end to end test flow @end-to-end
- Location: tests\EndtoEndTest.spec.ts:30:5

# Error details

```
TypeError: logoutPage.isContinueButtonVisible is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - navigation [ref=f3e2]:
    - generic [ref=f3e3]:
      - button "$ Currency " [ref=f3e7] [cursor=pointer]:
        - strong [ref=f3e8]: $
        - text: Currency
        - generic [ref=f3e9]: 
      - list [ref=f3e11]:
        - listitem [ref=f3e12]:
          - link "" [ref=f3e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f3e15]:
          - link " My Account" [ref=f3e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=f3e17]: 
            - text: My Account
        - listitem [ref=f3e19]:
          - link " Wish List (0)" [ref=f3e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=f3e21]: 
            - text: Wish List (0)
        - listitem [ref=f3e22]:
          - link " Shopping Cart" [ref=f3e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=f3e24]: 
            - text: Shopping Cart
        - listitem [ref=f3e25]:
          - link " Checkout" [ref=f3e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=f3e27]: 
            - text: Checkout
  - banner [ref=f3e28]:
    - generic [ref=f3e30]:
      - heading [level=1] [ref=f3e33]:
        - link "Qafox.com" [ref=f3e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=f3e36]:
        - textbox "Search" [ref=f3e37]
        - button "" [ref=f3e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f3e43] [cursor=pointer]:
        - generic [ref=f3e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f3e46]:
    - generic: 
    - list [ref=f3e48]:
      - listitem [ref=f3e49]:
        - link "Desktops" [ref=f3e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=f3e51]:
        - link "Laptops & Notebooks" [ref=f3e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=f3e53]:
        - link "Components" [ref=f3e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=f3e55]:
        - link "Tablets" [ref=f3e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=f3e57]:
        - link "Software" [ref=f3e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=f3e59]:
        - link "Phones & PDAs" [ref=f3e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=f3e61]:
        - link "Cameras" [ref=f3e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=f3e63]:
        - link "MP3 Players" [ref=f3e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=f3e65]:
    - list [ref=f3e66]:
      - listitem [ref=f3e67]:
        - link "" [ref=f3e68] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - listitem [ref=f3e70]:
        - link "Account" [ref=f3e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
      - listitem [ref=f3e72]:
        - link "Logout" [ref=f3e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/logout
    - generic [ref=f3e74]:
      - generic [ref=f3e75]:
        - heading "Account Logout" [level=1] [ref=f3e76]
        - paragraph [ref=f3e77]: You have been logged off your account. It is now safe to leave the computer.
        - paragraph [ref=f3e78]: Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.
        - link "Continue" [ref=f3e80] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - complementary [ref=f3e81]:
        - generic [ref=f3e82]:
          - link "Login" [ref=f3e83] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/login
          - link "Register" [ref=f3e84] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/register
          - link "Forgotten Password" [ref=f3e85] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/forgotten
          - link "My Account" [ref=f3e86] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
          - link "Address Book" [ref=f3e87] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - link "Wish List" [ref=f3e88] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
          - link "Order History" [ref=f3e89] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - link "Downloads" [ref=f3e90] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - link "Recurring payments" [ref=f3e91] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
          - link "Reward Points" [ref=f3e92] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - link "Returns" [ref=f3e93] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - link "Transactions" [ref=f3e94] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - link "Newsletter" [ref=f3e95] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
  - contentinfo [ref=f3e96]:
    - generic [ref=f3e97]:
      - generic [ref=f3e98]:
        - generic [ref=f3e99]:
          - heading "Information" [level=5] [ref=f3e100]
          - list [ref=f3e101]:
            - listitem [ref=f3e102]:
              - link "About Us" [ref=f3e103] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=f3e104]:
              - link "Delivery Information" [ref=f3e105] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=f3e106]:
              - link "Privacy Policy" [ref=f3e107] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=f3e108]:
              - link "Terms & Conditions" [ref=f3e109] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=f3e110]:
          - heading "Customer Service" [level=5] [ref=f3e111]
          - list [ref=f3e112]:
            - listitem [ref=f3e113]:
              - link "Contact Us" [ref=f3e114] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=f3e115]:
              - link "Returns" [ref=f3e116] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=f3e117]:
              - link "Site Map" [ref=f3e118] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=f3e119]:
          - heading "Extras" [level=5] [ref=f3e120]
          - list [ref=f3e121]:
            - listitem [ref=f3e122]:
              - link "Brands" [ref=f3e123] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=f3e124]:
              - link "Gift Certificates" [ref=f3e125] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=f3e126]:
              - link "Affiliate" [ref=f3e127] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=f3e128]:
              - link "Specials" [ref=f3e129] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=f3e130]:
          - heading "My Account" [level=5] [ref=f3e131]
          - list [ref=f3e132]:
            - listitem [ref=f3e133]:
              - link "My Account" [ref=f3e134] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=f3e135]:
              - link "Order History" [ref=f3e136] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=f3e137]:
              - link "Wish List" [ref=f3e138] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=f3e139]:
              - link "Newsletter" [ref=f3e140] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=f3e141]
      - paragraph [ref=f3e142]:
        - text: Powered By
        - link "OpenCart" [ref=f3e143] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  1   | /** 
  2   |  * Test Case: End to end test on Demo E comerece application 
  3   |  * 
  4   |  * purpose: this test simulates a complete user flow on an e commerece website 
  5   |  * 
  6   |  * steps:
  7   |  * 1) register a new account 
  8   |  * 2) logout after registration 
  9   |  * 3) login with the same account 
  10  |  * 4) search for a product and add it to the tshopping cart 
  11  |  * 5) verify cart contents
  12  |  * 6) attempts checkout (disabled since it is not avialbe on demo site)
  13  |  */
  14  | 
  15  | import { test, expect, Page } from "@playwright/test";
  16  | import { RegistrationPage } from "../pages/RegistrationPage";
  17  | import { HomePage } from "../pages/HomePage";
  18  | import { RandomDataUtil } from "../utils/randomDataGenerator";
  19  | import { TestConfig } from "../test.config";
  20  | import { LogoutPage } from "../pages/LogoutPage";
  21  | import { LoginPage } from "../pages/LoginPage";
  22  | import { MyAccountPage } from "../pages/MyAccountPage";
  23  | import { SearchResultPage } from "../pages/SearchResultPage";
  24  | import { ProductPage } from "../pages/ProductPage";
  25  | import { ShoppingCartPage } from "../pages/ShoppingCartPage";
  26  | import { CheckOutPage } from "../pages/CheckOutPage";
  27  | 
  28  | //this is the main test block that runs the entire flow
  29  | 
  30  | test("Executed the end to end test flow @end-to-end", async ({ page }) => {
  31  | 
  32  |     const config = new TestConfig();
  33  | 
  34  |     //Navigate to application home page 
  35  |     await page.goto(config.appUrl);
  36  | 
  37  |     // Step 1: Register a new account and capture the generated email 
  38  |     let registeredEmail: string = await perfomRegistration(page);
  39  |     console.log("Registration is completed");
  40  | 
  41  |     //step 2: Logout after successful registration 
  42  |     await perfomLogout(page);
  43  |     console.log("Logout is Completed");
  44  | 
  45  |     //Step 3: Login with the registered email 
  46  |     await perfomeLogin(page, registeredEmail);
  47  |     console.log("Login is Completed");
  48  | 
  49  |     //Step 4: Search for a product and add it to the cart 
  50  |     await addProductToCart(page);
  51  |     console.log("Product added to the cart!");
  52  | 
  53  |     //step 5: verify the contents of the shopping cart 
  54  |     await verifyShoppingCart(page);
  55  |     console.log("Shopping cart verification Completed!");
  56  | 
  57  |     //step 6: perfome checkOut (skipped for demo site)
  58  | 
  59  |     //function to register a new user account 
  60  | 
  61  |     async function perfomRegistration(page: Page): Promise<string> {
  62  | 
  63  |         const homepage = new HomePage(page);
  64  |         await homepage.clickMyAccount();
  65  |         await homepage.clickRegister();
  66  | 
  67  |         const registrationPage = new RegistrationPage(page);
  68  | 
  69  |         //fill in random user details 
  70  | 
  71  |         await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  72  |         await registrationPage.setLastName(RandomDataUtil.getLastName());
  73  | 
  74  |         let email: string = RandomDataUtil.getEmail();
  75  |         await registrationPage.setEmail(email);
  76  |         await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  77  | 
  78  |         await registrationPage.setPassword("test123");
  79  |         await registrationPage.setConfirmPassword("test123");
  80  | 
  81  |         await registrationPage.setPrivacyPlicy();
  82  |         await registrationPage.clickContinue();
  83  | 
  84  |         //validate the registration was ucessful 
  85  | 
  86  |         const confirmationMsg = await registrationPage.getConfirmationMsg();
  87  |         expect(confirmationMsg).toContain("Your Account Has Been Created");
  88  | 
  89  |         return email; // return the email will use for later use in login
  90  |     }
  91  | 
  92  |     //function to logout for the current user 
  93  | 
  94  |     async function perfomLogout(page: Page) {
  95  | 
  96  |         const myAccountPage = new MyAccountPage(page);
  97  |         const logoutPage: LogoutPage = await myAccountPage.clickLogout();
  98  | 
  99  |         // Ensure the "Continue" Button is visible 
> 100 |         expect(await logoutPage.isContinueButtonVisible()).toBe(true);
      |                                 ^ TypeError: logoutPage.isContinueButtonVisible is not a function
  101 | 
  102 |         //click "Continue" and verify redirection to HomePage
  103 | 
  104 |         await logoutPage.clickOnContinue();
  105 | 
  106 |     }
  107 | 
  108 |     //function to login using the registered email 
  109 | 
  110 |     async function perfomeLogin(page: Page, email: string) {
  111 | 
  112 |         const config = new TestConfig();
  113 |         await page.goto(config.appUrl);
  114 | 
  115 |         const homePage = new HomePage(page);
  116 | 
  117 |         await homePage.clickMyAccount();
  118 |         await homePage.clickLogin();
  119 | 
  120 |         const loginPage = new LoginPage(page);
  121 | 
  122 |         //  Missing await fixed
  123 |         await loginPage.login(email, "test123");
  124 | 
  125 |         //verify login by checking My Account Page
  126 | 
  127 |         const myAccountPage = new MyAccountPage(page);
  128 | 
  129 |         // Uncomment this after confirming your method works
  130 |         expect(await myAccountPage.isMyAccountPageExist()).toBeTruthy();
  131 | 
  132 |     }
  133 |         //function to search for a product and add it to cart 
  134 | 
  135 |     async function addProductToCart(page: Page) {
  136 | 
  137 |         const homePage = new HomePage(page);
  138 | 
  139 |         const config = new TestConfig();
  140 |         const productName: string = config.productName;
  141 |         const productQuantity: string = config.productQuantity;
  142 | 
  143 |         await homePage.enterProductName(productName);
  144 |         await homePage.clickSearch(); //click on search button
  145 | 
  146 |         const searchResultPage = new SearchResultPage(page);
  147 | 
  148 |         //validate search result page
  149 | 
  150 |         expect(await searchResultPage.isSearchResultPageExists()).toBeTruthy();
  151 | 
  152 |         //validate that the desired product exists in the results 
  153 | 
  154 |         expect(await searchResultPage.isProductExists(productName)).toBeTruthy();
  155 | 
  156 |         //select product and set quantity 
  157 |         const productPage = await searchResultPage.selectProduct(productName);
  158 | 
  159 |         // Optional: uncomment after debugging
  160 |          expect(productPage).not.toBeNull();
  161 | 
  162 |         await productPage?.setQuantity(productQuantity);
  163 | 
  164 |         //  Missing await fixed
  165 |         await productPage?.addProductToCart();
  166 | 
  167 |         //confirm product was added 
  168 |         expect(await productPage?.isConfirmationMessageVisible()).toBe(true);
  169 | 
  170 |     }
  171 | 
  172 |     //function to verify the shoppping cart details 
  173 | 
  174 |     async function verifyShoppingCart(page: Page) {
  175 | 
  176 |         const productPage = new ProductPage(page);
  177 | 
  178 |         //Navigate to shopping cart from product page
  179 | 
  180 |         await productPage.clickItemsToNavigateToCart();
  181 |         const shoppingCartPage: ShoppingCartPage = await productPage.clickViewCart();
  182 | 
  183 |         console.log("🛒 Navigated to shopping cart!");
  184 | 
  185 |         const config = new TestConfig();
  186 | 
  187 |         //validate that total price is correct (based on config)
  188 | 
  189 |         expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
  190 | 
  191 |     }
  192 | 
  193 | });
```