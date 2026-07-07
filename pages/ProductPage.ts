import {Page,expect,Locator } from "@playwright/test";
import {ShoppingCartPage} from './ShoppingCartPage'; //import shopping cart if needed

export class ProductPage {

    private readonly page:Page;

    //Locators using css selectors
private readonly txtQuantity:Locator;
private readonly btnAddToCart:Locator;
private readonly confirmnMsg: Locator;
private readonly btnItems:Locator;
private readonly linkViewCart:Locator;

constructor (page:Page) {
    this.page=page;
//initializing locatos with css selectors 

this.txtQuantity=page.locator('#input-quantity');
this.btnAddToCart=page.getByRole('button', { name: 'Add to Cart' });
this.confirmnMsg=page.locator('.alert.alert-success.alert-dismissible');
this.btnItems=page.locator('#cart');
this.linkViewCart=page.locator('strong:has-text("View Cart")');

}

//Methods

// 1) Sets the Product quantity 

 async setQuantity (qty:string):Promise<void> 
 {

 await this.txtQuantity.fill('');
 await this.txtQuantity.fill(qty);

 }

 //Add products to cart 

 async addProductToCart() 
 {

   await this.btnAddToCart.click();

 }


 //Check If Confirmation message is visible 

 async isConfirmationMessageVisible ():Promise<boolean>
 {

    if(this.confirmnMsg!=null)
    {
        return true;
    }
    else{
        return false;
    }
//return await ( this.confirmnMsg).isVisible()


 }

 //Click on items button to navigate to cart 

 async clickItemsToNavigateToCart ():Promise<void>
 {

  await this.btnItems.click();

 }

 //click on view cart link 

 async clickViewCart():Promise<ShoppingCartPage>
 {

    await this.linkViewCart.click();
    return new ShoppingCartPage(this.page);

 }

 //Complete workflow to add product to cart 

 async AddProductTocart(quantity:string):Promise<void>
 {

    await this.setQuantity(quantity);
    await this.addProductToCart();
    await this.isConfirmationMessageVisible();

 }




}