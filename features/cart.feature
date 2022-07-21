Feature: Testing how cart works

    Scenario: Testing adding and removing item from cart
        Given I am on home page on saucedemo, logged in as standard user
        When I click on ADD TO CART button
        And I click on cart icon
        And I click on remove button on right side
        Then I should see empty cart