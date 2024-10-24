Feature: Account Functionality

  @smoke @homePage
  Scenario Outline: User updates profile information
    Given user is on the profile page
    When the user updates personal <information> and saves the changes
    Then the profile information updated

    Examples:
      | information                            |
      | WDIO Practical Task _ Tinatin Abuladze |
