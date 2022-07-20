Feature: Testing if i can place the order

Scenario: Testing purchasing with empty cart

Given I am loged on home page with products
When I click on cart what is empty
And I click on checkout
And Enter first name, last name and ZIP code
And I click on continue
And I click on finish
Then I should be rejected for order