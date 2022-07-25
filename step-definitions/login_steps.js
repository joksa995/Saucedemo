const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../support/pages/login.page');
const HomePage = require('../support/pages/home.page');
const usersData = require('../config/data/usersdata');
require("dotenv").config();

Given(/^I am on the login page$/, function() {
    browser.url('/');
});

When(/^I login with username and password$/, function() {
    LoginPage.login(process.env.USERNAME, process.env.PASSWORD);
});

Then(/^I should be sent on home page with products$/, function() {
    HomePage.checkIfYouAreLogedIn();
});