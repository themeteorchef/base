Signup = React.createClass({
  validations() {
    let component = this;

    return {
      rules: {
        emailAddress: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        }
      },
      messages: {
        emailAddress: {
          required: 'Need an email address here.',
          email: 'Is this email address legit?'
        },
        password: {
          required: 'Need a password here.',
          minlength: 'Use at least six characters, please.'
        }
      },
      submitHandler() {
        let { getValue } = ReactHelpers,
            form         = component.refs.signupForm.refs.form,
            email        = getValue( form, '[name="emailAddress"]' ),
            password     = getValue( form, '[name="password"]' );

        Accounts.createUser( { email: email, password: password }, ( error ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Welcome!', 'success' );
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
        <PageHeader size="h4" label="Sign Up" />
        <Form ref="signupForm" id="signup" className="signup" validations={ this.validations() } onSubmit={ this.handleSubmit }>
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
