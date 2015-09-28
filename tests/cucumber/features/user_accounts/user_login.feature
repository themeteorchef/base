Feature: User Login

	As an existing user
	I want to be able to login
	So that I can access the awesome app

	Background:
		Given I am an existing user
		And I navigate to "/login"

	@dev
	Scenario: Log in
		When I enter my email "test@runner.com" and password "password"
		And I submit the form
		Then I should see the message "Logged in!"

	@dev
	Scenario: User not found
		When I enter my email "test@test.com" and password "password"
		And I submit the form
		Then I should see an error and the text "User not found"
