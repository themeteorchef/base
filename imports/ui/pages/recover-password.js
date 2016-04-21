import React from 'react';
import { Row, Col, Alert, Input, Button } from 'react-bootstrap';
import { handleRecoverPassword } from '../../modules/recover-password';

export class RecoverPassword extends React.Component {
  componentDidMount() {
    handleRecoverPassword({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Recover Password</h4>
        <Alert bsStyle="info">
          Enter your email address below to receive a link to reset your password.
        </Alert>
        <form ref="recoverPassword" className="recover-password" onSubmit={ this.handleSubmit }>
          <Input
            type="email"
            ref="emailAddress"
            name="emailAddress"
            placeholder="Email Address"
          />
        <Button type="submit" bsStyle="success">Recover Password</Button>
        </form>
      </Col>
    </Row>;
  }
}
