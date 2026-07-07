import {Page,Locator} from "@playwright/test";

import { HomePage } from "./HomePage";

export class LogoutPage {


private readonly page:Page;
private readonly btnContinue:Locator;

constructor (page:Page) {

this.page=page;
this.btnContinue=page.getByRole('link', { name: 'Continue' });



}

async clickOnContinue():Promise<HomePage> 
{
 
    await this.btnContinue.click();
    return new HomePage(this.page);


}


//verify if continue button is visible or not 

async isContinueButtonVisible ():Promise<boolean>
{

return await this.btnContinue.isVisible()


}

}