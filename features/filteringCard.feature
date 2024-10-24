Feature: Filter Functionality

  @boardPage @only
  Scenario Outline: User Filtering of cards by label
    Given user go to the board page
    When user filtering cards by the <label>
    Then all cards with the matched label are displayed

    Examples:
      | label  |
      | Urgent |
