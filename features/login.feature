Feature: I am on saucedemo.com

  Scenario: Testing login page

    Given I am on the login page
    When I login with username and password
    Then I should be sent on home page with products