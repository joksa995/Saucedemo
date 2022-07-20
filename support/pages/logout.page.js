const Page = require('./base.page');
const assert = require('assert');

class LogoutPage extends Page {


    get btnLogout() {
        return $('#logout_sidebar_link');
    }
    get btnSubmit() {
        return $('#login-button');
    }
    clickOnLogoutButton() {
        this.click(this.btnLogout);
    }
    checkIfLoginButtonIsDisplayed() {
        assert.strictEqual(this.btnSubmit.isDisplayed(), true);
    }
}
module.exports = new LogoutPage();