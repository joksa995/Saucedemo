const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/login.page');

Given(/^I am on the login page$/, function() {
    browser.url('/');
});

When(/^I login with username and password$/, function() {
    LoginPage.login('standard_user', 'secret_sauce');
});

Then(/^I should be sent on home page with products$/, function() {
    browser.pause(5000);
});