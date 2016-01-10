PasswordInput = React.createClass({
  render() {
    return <FormControl
      showLabel={ this.props.showLabel }
      labelLink={ this.props.labelLink }
      style="input"
      name="password"
      type="password"
      label="Password"
    />;
  }
});
