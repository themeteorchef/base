RecoverPassword = React.createClass({
  validations() {
    let component = this;

    return {
      rules: {
        emailAddress: {
          required: true,
          email: true
        }
      },
      messages: {
        emailAddress: {
          required: 'Need an email address here.',
          email: 'Is this email address legit?'
        }
      },
      submitHandler() {
        let { getValue } = ReactHelpers;

        let form  = component.refs.recoverPasswordForm.refs.form,
            email = getValue( form, '[name="emailAddress"]' );

        Accounts.forgotPassword( { email: email }, ( error ) => {
          if ( error ) {
            Bert.alert( error.reason, 'warning' );
          } else {
            Bert.alert( 'Check your inbox for a reset link!', 'success' );
          }
        });
      }
    };
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-6 col-md-4">
        <PageHeader size="h4" label="Recover Password" />
        <InfoAlert>
          Enter your email address below to receive a link to reset your password.
        </InfoAlert>
        <Form ref="recoverPasswordForm" id="recover-password" validations={ this.validations() } className="recover-password" onSubmit={ this.handleSubmit }>
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
