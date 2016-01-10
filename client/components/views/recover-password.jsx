RecoverPassword = React.createClass({
  render() {
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-6 col-md-4">
        <PageHeader size="h4" label="Recover Password" />
        <InfoAlert>
          Enter your email address below to receive a link to reset your password.
        </InfoAlert>
        <Form id="recover-password" className="recover-password" onSubmit={ this.handleSubmit }>
          <FormGroup>
            <EmailInput showLabel={ true } />
          </FormGroup>
          <FormGroup>
            <SuccessButton type="submit" label="Recover Password" />
          </FormGroup>
        </Form>
      </GridColumn>
    </GridRow>;
  }
});
