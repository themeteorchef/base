import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Input, Button } from 'react-bootstrap';
import { handleSignup } from '../../modules/signup';

export class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Sign Up</h4>
        <form ref="signup" className="signup" onSubmit={ this.handleSubmit }>
          <Row>
            <Col xs={ 6 } sm={ 6 }>
              <Input
                type="text"
                label="First Name"
                ref="firstName"
                name="firstName"
                placeholder="First Name"
              />
            </Col>
            <Col xs={ 6 } sm={ 6 }>
              <Input
                type="text"
                label="Last Name"
                ref="lastName"
                name="lastName"
                placeholder="Last Name"
              />
            </Col>
          </Row>
          <Input
            type="email"
            label="Email Address"
            ref="emailAddress"
            name="emailAddress"
            placeholder="Email Address"
          />
          <Input
            type="password"
            label="Password"
            ref="password"
            name="password"
            placeholder="Password"
          />
          <Button type="submit" bsStyle="success">Sign Up</Button>
        </form>
        <p>Already have an account? <Link to="/login">Log In</Link>.</p>
      </Col>
    </Row>;
  }
}
