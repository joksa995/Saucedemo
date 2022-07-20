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
        this.setValue(this.inputFirstName, firstname);
        this.setValue(this.inputLastName, lastname);
        this.setValue(this.inputZipCode, zipcode);
    }
    checkIfOrderConfirmed() {
        assert.strictEqual(this.btnBackHome.isDisplayed(), true);
    }
}
module.exports = new OrderPage();