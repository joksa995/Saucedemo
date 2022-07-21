Feature: Testing if i see home page when i am logged on

    Scenario: Testing hamburger button
        Given I am loged in on home page
        When I click on hamburger button on the top left side
        Then I shoud see list of comands
