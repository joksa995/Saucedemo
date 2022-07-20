const Page = require('./base.page');

class LoginPage extends Page {

    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#login-button');
    }

    login(username, password) {
        this.setValue(this.inputUsername, username);
        this.setValue(this.inputPassword, password)
        this.click(this.btnSubmit);
    }
}

module.exports = new LoginPage();