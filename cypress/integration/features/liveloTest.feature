Feature: livelo teste
As a user 
I want to be able to choose a product and add to

    Background:
        Given the user set the product

    Scenario: Check that the user has confirmed the addition to the cart without discound
        Then the product must be selected without discound
        When must be checked if ther product is selected