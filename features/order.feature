# Feature: I am on saucedemo.com

# Scenario: Testing purchasing with empty cart

# Given I am on home page with products
# When I click on cart what is empty
# And I click on checkout
# And Enter first name, last name and ZIP code
# And I click on continue
# Then I should be rejected for order

# Scenario: Testing purchasing with somthing in cart

# Given I am on home page with products
# When I click on cart what products
# And I click on checkout
# And Enter first name, last name and ZIP code
# And I click on continue
# Then I should see confirmation message