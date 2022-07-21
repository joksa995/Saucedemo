const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../support/pages/home.page');
const LoginPage = require('../support/pages/login.page');
const usersData = require('../config/data/usersdata');
const CartPage = require('../support/pages/cart.page');
const OrderPage = require('../support/pages/order.page');

Given(/^I am on home page on saucedemo, logged in as standard user$/, function() {
    browser.url('/');
    LoginPage.login(usersData.username, usersData.password);
});

When(/^I click on ADD TO CART button$/, function() {
    CartPage.clickOnAddtoCartButton();
});

When(/^I click on cart icon$/, function() {
    OrderPage.clickOnShoppingCartButton();
});

When(/^I click on remove button on right side$/, function() {
    CartPage.clickOnRemoveFromCartButton();
});

Then(/^I should see empty cart$/, () => {
    CartPage.checkIfCartIsEmpty();
});