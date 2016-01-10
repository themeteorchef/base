ResetPassword = React.createClass({
  render() {
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-6 col-md-4">
        <PageHeader size="h4" label="Reset Password" />
        <InfoAlert>
          To reset your password, enter a new one below. You will be logged in with your new password.
        </InfoAlert>
        <Form id="login" className="login" onSubmit={ this.handleSubmit }>
          <FormGroup>
            <PasswordInput showLabel={ true } />
          </FormGroup>
          <FormGroup>
            <RepeatPasswordInput showLabel={ true } />
          </FormGroup>
          <FormGroup>
            <SuccessButton type="submit" label="Reset Password &amp; Login" />
          </FormGroup>
        </Form>
      </GridColumn>
    </GridRow>;
  }
});
