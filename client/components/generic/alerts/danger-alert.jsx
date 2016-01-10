DangerAlert = React.createClass({
  render() {
    return <Alert style="danger">
      { this.props.children }
    </Alert>;
  }
});
