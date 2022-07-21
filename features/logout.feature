Feature: Testing if logout buttom works

    Scenario: Testing logaut
        Given I am loged in saucedemo.com page with products
        When I click on hamburger button
        And I click on Logout button
        Then I should be back on Log in page