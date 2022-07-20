const Page = require('./base.page');
const assert = require('assert');

class HomePage extends Page {

    get btnHamburger() {
        return $('#react-burger-menu-btn');
    }
    get btnAllItems() {
        return $('#inventory_sidebar_link');
    }
    get btnAbout() {
        return $('#about_sidebar_link');
    }
    get btnLogout() {
        return $('#logout_sidebar_link');
    }
    get btnResetAppState() {
        return $('#reset_sidebar_link');
    }
    get SauceLabTextDispayed() {
        return $('.title.is-1');
    }

    checkIfTextIsDisplayed() {
        assert.strictEqual(this.SauceLabTextDispayed.getText(), 'Pass or fail. The world relies on your code.');
    }

    checkIfYouAreLogedIn() {
        assert.strictEqual(this.btnHamburger.isDisplayed(), true);
    }

    clickOnHamburgerButton() {
        this.click(this.btnHamburger);
    }

    clickOnAllItemButton() {
        this.click(this.btnAllItems);
    }

    clickOnAboutButton() {
        this.click(this.btnAbout);
    }

    clickOnLogout() {
        this.click(this.btnLogout);
    }

    checkIfHamburgerMenuIsDispayed() {
        assert.strictEqual(this.btnAllItems.isDisplayed(), true);
        assert.strictEqual(this.btnAbout.isDisplayed(), true);
        assert.strictEqual(this.btnLogout.isDisplayed(), true);
        assert.strictEqual(this.btnResetAppState.isDisplayed(), true);


    }
}
module.exports = new HomePage();