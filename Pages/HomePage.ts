import { Page, Locator } from '@playwright/test'
 
 
export class HomePage {
 
    readonly page: Page;
    readonly SauceLabsBackpack: Locator; //declaire
 
    constructor(page: Page) {
        this.page = page;
        this.SauceLabsBackpack = page.locator("#add-to-cart-sauce-labs-backpack")
 
    }
 
    async Veriefy_SauceLabsBackpack_Button() {
 
        await this.SauceLabsBackpack.click()
 
    }
 
 
}
 