import Page from "./page"

 class CartPage extends Page{

    get checkoutButton() {
        return $("#checkout")
    }
    get continueShoppingButton() {
        return $("#continue-shopping")
    }

    async validateOnCartPage() {
        await expect(this.checkoutButton).toBeExisting()
        await expect(this.continueShoppingButton).toBeExisting()
    }

    // open() {
    //     return super.open("cart.html")
    // }

 }

 export default new CartPage();