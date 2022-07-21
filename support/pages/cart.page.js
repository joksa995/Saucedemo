const Page = require('./base.page');
const assert = require('assert');

class CartPage extends Page {

    get btnAddToCart() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get btnRemoveFromCart() {
        return $('#remove-sauce-labs-backpack');
    }

    clickOnAddtoCartButton() {
        this.click(this.btnAddToCart);
    }

    clickOnRemoveFromCartButton() {
        this.click(this.btnRemoveFromCart);
    }
    checkIfCartIsEmpty() {
        assert.strictEqual(this.btnRemoveFromCart.isDisplayed(), false);
    }

}

module.exports = new CartPage();