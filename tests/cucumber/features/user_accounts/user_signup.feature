Feature: User Signup

	As an unregistered user
	I want to be able to signup
	So that I can access the awesome app

  Background:
    Given I am an existing user
    And I navigate to "/signup"

  @dev
	Scenario: Signup with email that already exists
		When I enter my email "test@runner.com" and password "password"
		And I submit the form
		Then I should see an error and the text "Email already exists."

	Background:
		Given I am not an existing user
		And I navigate to "/signup"

	@dev
	Scenario: Signup with no email
		When I enter my email "" and password "password"
		And I submit the form
		Then I should see the form validation error "Need an email address here."

  @dev
	Scenario: Signup with no password
		When I enter my email "test@runner.com" and password ""
		And I submit the form
		Then I should see the form validation error "Need a password here."

  @dev
  Scenario: Signup with an invalid email address
    When I enter my email "test" and password "password"
    And I submit the form
    Then I should see the form validation error "Is this email address legit?"

  @dev
	Scenario: Signup with an invalid password
		When I enter my email "test@test.com" and password "pass"
		And I submit the form
		Then I should see the form validation error "Use at least six characters, please."

	@dev
	Scenario: Signup with correct credentials
		When I enter my email "test@runner.com" and password "password"
		And I submit the form
		Then I should see the message "Welcome!"
