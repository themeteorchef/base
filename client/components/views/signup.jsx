Signup = React.createClass({
  render() {
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-6 col-md-4">
        <PageHeader size="h4" label="Sign Up" />
        <Form id="signup" className="signup" onSubmit={ this.handleSubmit }>
          <FormGroup>
            <EmailInput showLabel={ true } />
          </FormGroup>
          <FormGroup>
            <PasswordInput showLabel={ true } />
          </FormGroup>
          <FormGroup>
            <SuccessButton type="submit" label="Sign Up" />
          </FormGroup>
        </Form>
        <p>Already have an account? <a href="/login">Log In</a>.</p>
      </GridColumn>
    </GridRow>;
  }
});
