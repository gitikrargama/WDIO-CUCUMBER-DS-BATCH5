@login
Feature: Login Test

Background: 
  Given user is on Login Page

  @positive @tc-1

  Scenario Outline: Success Login
  When user login using "<username>" as username and "<password>" as a password
  And user should be directed to homepage

  Examples:
  | username      | password     |
  | standard_user | secret_sauce |
  | visual_user   | secret_sau |


  @negative @tc-2
  Scenario: Login with wrong password
    And user input "standard_user" as username
    And user input "wrong_sauce" as password
    When user click login buton
    Then user should see error message "Epic sadface: Username and password do not match any user in this service"