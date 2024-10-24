Feature: New Board Functionality

  @smoke @homePage
  Scenario Outline: User creates a new board
    Given user is on home page
    When user initiates creating a new board
    And provides the board name
    Then the new board is created and displayed on the dashboard
