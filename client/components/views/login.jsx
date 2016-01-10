Login = React.createClass({
  render() {
    let passwordLabelLink = {
      href: '/recover-password',
      label: 'Forget Password?'
    };

    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-6 col-md-4">
        <PageHeader size="h4" label="Log In" />
        <InfoAlert>
          To access the demo, you can use the email address <strong>admin@admin.com</strong> and the password <strong>password</strong>.
        </InfoAlert>
        <Form id="login" className="login" onSubmit={ this.handleSubmit }>
          <FormGroup>
            <EmailInput showLabel={ true } />
          </FormGroup>
          <FormGroup>
            <PasswordInput showLabel={ true } labelLink={ passwordLabelLink } />
          </FormGroup>
          <FormGroup>
            <SuccessButton type="submit" label="Login" />
          </FormGroup>
        </Form>
        <p>Don't have an account? <a href="/signup">Sign Up</a>.</p>
      </GridColumn>
    </GridRow>;
  }
});
