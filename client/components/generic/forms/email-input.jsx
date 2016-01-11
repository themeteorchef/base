EmailInput = React.createClass({
  render() {
    return <FormControl
      ref={ this.props.ref }
      showLabel={ this.props.showLabel }
      style="input"
      name="emailAddress"
      type="email"
      label="Email Address"
    />;
  }
});
