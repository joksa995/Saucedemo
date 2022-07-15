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
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();