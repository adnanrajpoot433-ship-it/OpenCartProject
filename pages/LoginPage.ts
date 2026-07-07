import {Page,Locator} from "@playwright/test";

export class LoginPage {

private readonly page:Page;

//Locators

private readonly txtEmailAdress:Locator;
private readonly txtPassword:Locator;
private readonly btnLogin:Locator;
private readonly txtErrorMessage: Locator;

//constructor 

constructor(page:Page) {


    this.page=page;

    //initialize locators with css selectors 
    this.txtEmailAdress=page.getByRole('textbox', { name: 'E-Mail Address' });
    this.txtPassword=page.getByRole('textbox', { name: 'Password' });
    this.btnLogin=page.getByRole('button', { name: 'Login' });
     this.txtErrorMessage = page.locator('.alert');

}

/* sets the email adress in the email field
@params field 

*/

async setEmail(email:string){

await this.txtEmailAdress.fill(email);

}

//set the password in the password field 

async setPassword (pwd:string) {


    await this.txtPassword.fill(pwd);
}


//click on the login button 
async clickLogin() 
{

     await this.btnLogin.click();

}




//we can also achieve the complete login by using this action 

async login(email:string,pwd:string) 
{

await this.setEmail(email);
await this.setPassword(pwd);
await this.clickLogin()
}

async getLoginErrorMessage():Promise<null |string> 
{

return (this.txtErrorMessage.textContent());
}











}