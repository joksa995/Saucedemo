const { Given, When, Then } = require('@wdio/cucumber-framework');
const { firstname, lastname, zipcode } = require('../config/data/usersdata');
const HomePage = require('../support/pages/home.page');
const LoginPage = require('../support/pages/login.page');
const OrderPage = require('../support/pages/order.page');
const usersData = require('../config/data/usersdata');

Given(/^I am loged on home page with products$/, function() {
    browser.url('/');
    LoginPage.login(usersData.username, usersData.password);
});
When(/^I click on cart what is empty$/, function() {
    OrderPage.clickOnShoppingCartButton();
});
When(/^I click on checkout$/, function() {
    OrderPage.clickOnCheckoutButton();
});
When(/^Enter first name, last name and ZIP code$/, function() {
    OrderPage.inputDataOfCastumer(usersData.firstname, usersData.lastname, usersData.zipcode);
    browser.pause(5000);
});
When(/^I click on continue$/, function() {
    OrderPage.clickOnContinueButton();
});
When(/^I click on finish$/, function() {
    browser.pause(5000);
    OrderPage.clickOnFinishButton();
});
Then(/^I should be rejected for order$/, function() {
    browser.pause(5000);
    OrderPage.checkIfOrderConfirmed();
});