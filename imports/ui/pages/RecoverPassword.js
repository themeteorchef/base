import React, { Component } from 'react';
import { Row, Col, Alert, FormGroup, FormControl, Button } from 'react-bootstrap';
import handleRecoverPassword from '../../modules/recover-password';

class RecoverPassword extends Component {
  componentDidMount() {
    handleRecoverPassword({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="RecoverPassword">
        <Row>
          <Col xs={12} sm={6} md={4}>
            <h4 className="page-header">Recover Password</h4>
            <Alert bsStyle="info">
              Enter your email address below to receive a link to reset your password.
            </Alert>
            <form
              ref={form => (this.recoverPasswordForm = form)}
              className="recover-password"
              onSubmit={this.handleSubmit}
            >
              <FormGroup>
                <FormControl
                  type="email"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Recover Password</Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RecoverPassword;
