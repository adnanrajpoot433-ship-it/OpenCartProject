
import {expect,Locator,Page} from "@playwright/test";

export class CheckOutPage {

private readonly page:Page;

//Locators

private readonly radioGuest: Locator;
private readonly btnContinue:Locator;
private readonly txtFirstName:Locator;
private readonly txtLastName:Locator;
private readonly txtAdress1:Locator;
private readonly txtAdress2:Locator;
private readonly txtCity : Locator;
private readonly txtPin:Locator;
private readonly drpCountry:Locator;
private readonly drpState:Locator;
private readonly btnContinueBillingAdress:Locator;
private readonly btnContinueDeliveryAdress:Locator;
private readonly txtDeliveryMethod: Locator;
private readonly btnContinueShippingAdress:Locator;
private readonly chkBoxsTerms:Locator;
private readonly btnContinuePaymentMethod:Locator;
private readonly ibiTotalPrice:Locator;
private readonly btnConfOrder:Locator;
private readonly ibiOrderConfMsg:Locator;

constructor (page:Page) 
{

    this.page=page;
    this.radioGuest=page.locator('input[value="guest"]');
    this.btnContinue=page.locator('#button-account');
    this.txtFirstName=page.locator('#input-payment-firstname');
    this.txtLastName=page.locator('#input-payment-lastname');
    this.txtAdress1=page.locator('#input-payment-address-1');
    this.txtAdress2=page.locator('#input-payment-address-2');
    this.txtCity=page.locator('#input-payment-city');
    this.txtPin=page.locator('#input-payment-postcode');
    this.drpCountry=page.locator('#input-payment-country');
    this.drpState=page.locator('#input-payment-zone');
    this.btnContinueBillingAdress=page.locator('#button-payment-adress');
    this.btnContinueDeliveryAdress=page.locator('#button-shipping-adress');
    this.txtDeliveryMethod=page.locator('textarea(name="comment")');
    this.btnContinueShippingAdress=page.locator('#button-shipping-method');
    this.chkBoxsTerms=page.locator('input[name="agree")');
    this.btnContinuePaymentMethod=page.locator('#button-payment-method');
    this.ibiTotalPrice=page.locator('strong:has-text("Total:")+ td');
    this.btnConfOrder=page.locator('#button-confirm');
    this.ibiOrderConfMsg=page.locator('#content h1');

}

//Methods 

//1) check if checkout page exists 

async isCheckOutPageExists () 
{
 
    await expect(this.page).toHaveTitle("Checkout");

}

// 2) Choose CheckOutoption 

async chooseCheckOutOption(CheckOutoption:string) 
{

    if(CheckOutoption==="Guest Checkout");
    await this.radioGuest.click();
}

//click on continue button 

async clickOnContinue() 
{

   await  this.btnContinue.click()
}

//form field methods 

async SetFirstName (firstname:string) {

    await this.txtFirstName.fill(firstname);
}

async SetLastName (lastname:string){

    await this.txtLastName.fill(lastname);
}

async setAdress1 (adress1:string) {

    await this.txtAdress1.fill(adress1);
}

async setAdress2 (address2:string) {

    await this.txtAdress2.fill(address2);
}

async setCity (city:string) 
{

    await this.txtCity.fill(city);
}

async setPin (pin:string) {

    await this.txtPin.fill(pin);
}

async setCountry (country:string) {

    await this.drpCountry.selectOption({label:country});
}

async setState (state:string) 
{

    await this.drpState.selectOption({label:state})
}

//Continue button methods 

async clickContinueAfterbillingAdress () 
{

    await this.btnContinueBillingAdress.click();
}

async clickOnContinueAfterDeliveryAddress ()
{

    await this.btnContinueDeliveryAdress.click();
}

//Delievery methods 

async setDeliveryMethodComment (deliveryMsg:string) 
{

    await this.txtDeliveryMethod.fill(deliveryMsg);
}

async clickOnContinueAfterDeliveryMethod ()
{

    await this.btnContinueShippingAdress.click();
}

//Terms and condition 

async selectTermsAndConditions (){

    await this.chkBoxsTerms.check();
}

async clickContinueAfterPaymentMethod() {

await this.btnContinuePaymentMethod.click();

}


//Order confirmation 

async getTotalPriceForConfOrder () 
{

    return await this.ibiTotalPrice.textContent();
}

async clickOnConfirmOrder () {

    await this.btnConfOrder.click();
}


async isOrderPlaced() {
    try {
        // Accept any dialog if it appears
        this.page.on('dialog', async dialog => {
            await dialog.accept();
        });

        await expect(this.ibiOrderConfMsg)
            .toHaveText("Your order has been Placed!");

        return true;
    } catch (error) {
        console.log(`Error verifying order placement: ${error}`);
        return false;
    }
}
}


