const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../support/pages/home.page');
const LoginPage = require('../support/pages/login.page');
const usersData = require('../config/data/usersdata');

Given(/^I am loged in on home page$/, function() {
    browser.url('/');
    LoginPage.login(usersData.username, usersData.password);
});

When(/^I click on hamburger button on the top left side$/, function() {
    HomePage.clickOnHamburgerButton();
    HomePage.clickOnAboutButton();
    HomePage.checkIfTextIsDisplayed();
});

Then(/^I shoud see list of comands$/, function() {});