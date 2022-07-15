const Page = require('./base.page');
const assert = require('assert');

class OrderPage extends Page {

    get btnShoppingCart() {
        return $('#shopping_cart_container');
    }
    get btnCheckout() {
        return $('#checkout');
    }
    get inputFirstName() {
        return $('#first-name');
    }
    get inputLastName() {
        return $('#last-name');
    }
    get inputZipCode() {
        return $('#postal-code');
    }
    get btnContinue() {
        return $('#continue');
    }
    get btnFinish() {
        return $('#finish');
    }
    get btnBackHome() {
        return $('#back-to-products');
    }
    clickOnContinueButton() {
        this.btnContinue.click();
    }
    clickOnShoppingCartButton() {
        this.btnShoppingCart.click();
    }
    clickOnCheckoutButton() {
        this.btnCheckout.click();
    }
    clickOnFinishButton() {
        this.btnFinish.click();
    }
    inputDataOfCastumer(firstname, lastname, zipcode) {
        this.inputFirstName.setValue(firstname);
        this.inputLastName.setValue(lastname);
        this.inputZipCode.setValue(zipcode);
    }

    checkIfOrderConfirmed() {
        assert.strictEqual(this.btnBackHome.isDisplayed(), true);
    }

}
module.exports = new OrderPage();