DangerButton = React.createClass({
  render() {
    return <Button
      type={ this.props.type }
      style="danger"
      label={ this.props.label }
      href={ this.props.href }
    />;
  }
});
