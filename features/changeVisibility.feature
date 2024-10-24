Feature: Workspace Visibility Functionality

  @boardPage
  Scenario Outline: User changes workspace visibility
    Given user is on the workspace setting page
    When user updates the workspace visibility
    Then the workspace details are updated
