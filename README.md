# Saucedemo

Project is about automatic testing saucedemo.com 

# Clone the repository.
$ git clone git@github.com:joksa995/Saucedemo.git

# Version of programs that needs to start the tests:
-node v14.18.2
-Npm v8.5.5

# Tests
1. Login Test: Automatic login with credentionals that are in usersdata.js and checking if you аre logged in.
2. Home menu test: Automatic login with credentionals that are in usersdata.js and click on hamburger button on top left side and checking if all elements in hamburger menu is displayed. Then click on ABOUT button and check if text on page saucelab is displayed.
3. Order test: Automatic login with credentionals that are in usersdata.js and click on cart button, then go to continue and automatic input data of customer that is in usersdata.js also and it can be changed if needed.
4. Cart test: Automatic login with credentionals that are in usersdata.js and click on ADD TO CART then go to cart and REMOVE from cart and check if there is enything in cart left.
5. Logout test: Automatic login with credentionals that are in usersdata.js and click on hamburger button then click on LOGOUT button and check if you are on Login page again.

# To run test:
-npm run test
"name": "webdriverio-tests",
    "version": "0.1.0",
    "private": true,
    "devDependencies": {
        "@wdio/cli": "^7.20.3",
        "@wdio/cucumber-framework": "^7.20.3",
        "@wdio/local-runner": "^7.20.3",
        "@wdio/spec-reporter": "^7.20.3",
        "chromedriver": "^102.0.0",
        "wdio-chromedriver-service": "^7.3.2"
    },
    "scripts": {
        "test": "wdio run wdio.conf.js"
    },
    "dependencies": {
        "@wdio/sync": "^7.20.3"
    }
}


