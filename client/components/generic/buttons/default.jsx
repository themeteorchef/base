DefaultButton = React.createClass({
  render() {
    return <Button
      type={ this.props.type }
      style="default"
      label={ this.props.label }
      href={ this.props.href }
    />;
  }
});
