import { Page, Locator } from "playwright";
 
export class LoginPage {
 
  //This line has 3 parts: //declaire
  // readonly   page   :   Page
  //    |        |         |
  // modifier   variable   type
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
 
 
  //intialize
  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name')
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
 
  }
 
 
  async gotourl() {
    await this.page.goto("https://www.saucedemo.com/")
 
  }
 
  async VerifyUsername(user: string,password:string) {
 
    await this.username.fill(user)
    await this.password.fill(password)
    await this.loginButton.click()
 
  }
 
 
 
 
 
  // // Navigate to application
  // async gotoURL() {
  //   await this.page.goto('https://www.saucedemo.com/');
 
  // }
 
 
  // async SauceDemo_Login(user: string) {
 
  //   await this.username.fill(user)
  //   // await this.password.fill(pass)
  //   // await this.loginButton.click()
 
 
  // }
 
 
  // // Login action
  //we will always use string becuase fill accepts only (" ")
  // async Login_Functionality(user: string, pass: string) {
  //   await this.username.fill(user);
  //   await this.password.fill(pass);
  //   await this.loginButton.click();
  // }
 
 
 
 
}
 