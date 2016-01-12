ResetPassword = React.createClass({
  validations() {
    let component = this;

    return {
      rules: {
        password: {
          required: true,
          minlength: 6
        },
        repeatPassword: {
          required: true,
          minlength: 6,
          equalTo: '[name="password"]'
        }
      },
      messages: {
        password: {
          required: "Enter a new password, please.",
          minlength: "Use at least six characters, please."
        },
        repeatPassword: {
          required: "Repeat your new password, please.",
          equalTo: "Hmm, your passwords don't match. Try again?"
        }
      },
      submitHandler() {
        let { getValue } = ReactHelpers;

        let form     = component.refs.resetPasswordForm.refs.form,
            token    = component.props.token,
            password = getValue( form, '[name="password"]' );

        Accounts.resetPassword( token, password, ( error ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Password reset!', 'success' );
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
        <PageHeader size="h4" label="Reset Password" />
        <InfoAlert>
          To reset your password, enter a new one below. You will be logged in with your new password.
        </InfoAlert>
        <Form ref="resetPasswordForm" id="reset-password" className="reset-password" validations={ this.validations() } onSubmit={ this.handleSubmit }>
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
