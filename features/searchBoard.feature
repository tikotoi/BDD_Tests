Feature: Search Functionality

  @smoke
  Scenario Outline: User searches for a board
    Given user is on the dashboard
    When user search for a board by a <name>
    Then the board matching the search criteria by name is displayed

    Examples:
      | name              |
      | Example test case |
