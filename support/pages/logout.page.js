const Page = require('./base.page');
const assert = require('assert');
const HomePage = require('./home.page');

class LogoutPage extends Page {


    get btnLogout() {
        return $('#logout_sidebar_link');
    }

    get btnSubmit() {
        return $('#login-button');
    }

    clickOnLogoutButton() {
        if (!this.btnLogout.isDisplayed()) {
            HomePage.clickOnHamburgerButton();
        }
        this.click(this.btnLogout);
    }

    checkIfLoginButtonIsDisplayed() {
        assert.strictEqual(this.btnSubmit.isDisplayed(), true);
    }

}
module.exports = new LogoutPage();