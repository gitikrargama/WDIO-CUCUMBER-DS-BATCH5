import Page from "./page";
import { $, expect } from '@wdio/globals'

class HomePage extends Page{

    get cartIcon(){
        return $("#shopping_cart_container")
    }
    get addToCartButton() {
        return $("#add-to-cart-sauce-labs-backpack")
    }
    get productImage() {
        return $("#item_0_img_link")
    }

    async validateOnHomePage() {
        await expect(this.productImage).toBeExisting()
        await expect(this.cartIcon).toBeExisting()
        await expect(this.addToCartButton).toBeExisting()
    }

    async addItemToCart() {
        await this.addToCartButton.waitForDisplayed({ timeout: 30000 })
        await this.addToCartButton.click()
    }

    open() {
        return super.open("inventroy.html")
    }

}

export default new HomePage();