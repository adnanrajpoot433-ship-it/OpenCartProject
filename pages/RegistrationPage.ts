import {Page,expect,Locator} from "@playwright/test";

export class RegistrationPage {

private readonly page:Page;

//Locators using css Locators 

private readonly txtFirstName:Locator;
private readonly txtLastName:Locator;
private readonly txtEmail:Locator;
private readonly txtPassword:Locator;
private readonly txtConfirmPassword: Locator;
private readonly txtTelephone:Locator;
private readonly btnContinue:Locator;
private readonly chkdPolicy :Locator;
private readonly msgConfirmation:Locator;


constructor(page:Page) 
{

    this.page=page;

    //Initialize locators with different locators 
this.txtFirstName=page.getByRole('textbox', { name: 'First Name' });
this.txtLastName=page.getByRole('textbox', { name: 'Last Name' });
this.txtEmail=page.getByRole('textbox', { name: 'E-Mail' });
this.txtPassword=page.locator('#input-password');
this.txtConfirmPassword=page.locator('#input-confirm');
this.chkdPolicy=page.locator('[name="agree"]');
this.msgConfirmation=page.getByRole('heading', { name: 'Your Account Has Been Created!', level: 1 });
this.btnContinue=page.getByRole('button', { name: 'Continue' });
this.txtTelephone=page.getByRole('textbox', { name: 'Telephone' });
}

/*
sets the first name in the registration form 
@param fname - first name to enter 

*/

async setFirstName(fname:string):Promise<void> {

  await this.txtFirstName.fill(fname);

}

/* sets the last name in the registration form 
@params lname - last name to enter 

*/

async setLastName (lname:string):Promise<void> {


    await this.txtLastName.fill(lname);
}

/*
sets the email in the registration form 
@params email- email to enter 
*/

async setEmail (email:string):Promise<void> 
{

    await this.txtEmail.fill(email);
}


/* sets the password in the registration form 
@params pwd - password to enter 
*/

async setPassword (pwd:string):Promise<void> {

await this.txtPassword.fill(pwd);

}
 
/*
check the policy checkBox 
*/

async setPrivacyPlicy ():Promise <void> 
{

     await this.chkdPolicy.check();

}

/* 
click the continue button 
*/

async clickContinue ():Promise<void> 
{

    await this.btnContinue.click();
}

/* 
gets the confirmation message text 
*/

async getConfirmationMsg():Promise<string> 
{

return await this.msgConfirmation.textContent() ?? '';

}

async setTelephone (tele:string):Promise<void>
{

    await this.txtTelephone.fill(tele);
}

async setConfirmPassword (pwd:string):Promise <void>

{

 await this.txtConfirmPassword.fill(pwd);

}



/* 
complete regestration workflow 
@params userdata - object containing registration data 
*/

async completeRegistration (userData :{

 firstName:string;
 lastName:string;
 email:string;
 password:string;
 telephone:string;
}):Promise<void> {


await this.setFirstName(userData.firstName);
await this.setLastName(userData.lastName);
await this.setEmail(userData.email);
await this.setPassword(userData.password);
await this.setConfirmPassword(userData.password)
await this.setTelephone(userData.telephone)
await this.setPrivacyPlicy();
await this.clickContinue();
await expect(this.msgConfirmation).toBeVisible();


}


}