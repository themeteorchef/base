import React from 'react';
import { Row, Col, PageHeader, Input, Button } from 'react-bootstrap';
import { handleLogin } from '../../modules/login';

export class Login extends React.Component {
  componentDidMount() {
    handleLogin( { component: this } );
  }

  handleSubmit( event ) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Login</h4>
        <form ref="login" className="login" onSubmit={ this.handleSubmit }>
          <Input
            type="email"
            label="Email Address"
            ref="emailAddress"
            name="emailAddress"
            placeholder="Email Address"
          />
          <div className="form-group">
            <label htmlFor="password">
              <span className="pull-left">Password</span>
              <a className="pull-right" href="/recover-password">Forgot Password?</a>
            </label>
            <input type="password" className="form-control" ref="password" name="password" placeholder="Password" />
          </div>
          <Button type="submit" bsStyle="success">Login</Button>
        </form>
      </Col>
    </Row>;
  }
}
