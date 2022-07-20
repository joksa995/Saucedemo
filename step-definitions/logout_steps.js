const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/login.page');
const HomePage = require('../support/pages/home.page');
const LogoutPage = require('../support/pages/logout.page');
const usersData = require('../config/data/usersdata');

Given(/^I am loged in saucedemo.com page with products$/, function() {
    browser.url('/');
    LoginPage.login(usersData.username, usersData.password);
});
When(/^I click on hamburger button$/, function() {
    HomePage.clickOnHamburgerButton();
});
When(/^I click on Logout button$/, function() {
    browser.pause(30000);
    LogoutPage.clickOnLogoutButton();
});
Then(/^I should be back on Log in page$/, function() {
    LogoutPage.checkIfLoginButtonIsDisplayed();
});