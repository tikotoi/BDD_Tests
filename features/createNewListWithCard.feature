@boardPage
Feature: Lists Functionality

  Scenario Outline: User creates a new list on a board
    Given user is on the a board
    When user creates a new list by providing the list name
    Then the new list is created and displayed on the board

  Scenario Outline: User creates a new card in a list
    When user creates a new card and provides the card name
    Then the new card is created and displayed in the list
