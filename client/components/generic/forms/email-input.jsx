EmailInput = React.createClass({
  render() {
    return <FormControl
      showLabel={ this.props.showLabel }
      style="input"
      name="emailAddress"
      type="email"
      label="Email Address"
    />;
  }
});
