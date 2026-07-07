import {Page,Locator} from "@playwright/test";

import {CheckOutPage} from '../pages/CheckOutPage';

export class ShoppingCartPage {

private readonly page:Page;

private readonly iblTotalPrice:Locator;
private readonly btnCheckOut: Locator;
constructor(page:Page)

{

this.page=page;
this.iblTotalPrice=page.locator("//*[@id='content']/div[2]/div/table//strong[text()='Total:']//following::td");
this.btnCheckOut=page.locator('a:has-text("checkout")');

}

//get the total price from the shopping cart

async getTotalPrice():Promise<string | null> {

return await this.iblTotalPrice.textContent();
    
}

//click on the checkout button 

async clickOnCheckOut (): Promise<CheckOutPage> 
{

    await this.btnCheckOut.click();
    return new CheckOutPage(this.page);

}


//verify if shopping cart page is loaded 

async isPageLoaded ():Promise<boolean>
{

  return await this.btnCheckOut.isVisible();

}

}