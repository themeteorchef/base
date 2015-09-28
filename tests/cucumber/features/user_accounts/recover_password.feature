Feature: Recover Password

	As a registered user
	I want to be able to recover my password
	So that I can access the awesome app

	Background:
    Given I am not an existing user
    And I navigate to "/recover-password"

    @dev
    Scenario: User not registered, recover password unsuccessful
			When I enter my email "test@runner.com"
			And I submit the form
			Then I should see an error and the text "User not found"

  Background:
    Given I am an existing user
    And I navigate to "/recover-password"

    @dev
    Scenario: Recover password successfully
			When I enter my email "test@runner.com"
			And I submit the form
			Then I should see an email with the correct subject "[Application Name] Reset Your Password"
			When I click the link I should be directed to a password reset form
			And when I enter my new password "newpassword"
			And I submit the form
			Then I should see the message "Password reset!"
