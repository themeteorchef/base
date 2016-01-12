WarningButton = React.createClass({
  render() {
    return <Button
      type={ this.props.type }
      style="warning"
      label={ this.props.label }
      href={ this.props.href }
    />;
  }
});
