import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

if (typeof Global === 'undefined') {
  Global = {};
}

export default class Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      message: '',
      callback: null,
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    Global.confirm = this.show;
  }

  show(message, callback) {
    this.setState({
      show: true,
      message,
      callback,
    });
  }

  hide(response) {
    this.setState({
      show: false,
    }, this.state.callback(response));
  }

  render() {
    let { message, show } = this.state;

    return (
      <div className="static-modal">
        <Modal show={show} onHide={this.hide}>
          <Modal.Header>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            { message }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.hide(false)}>
              Cancel
            </Button>
            <Button bsStyle="primary" onClick={() => this.hide(true)}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
