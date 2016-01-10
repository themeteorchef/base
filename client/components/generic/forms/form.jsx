Form = React.createClass({
  render() {
    return <form
      id={ this.props.id }
      className={ this.props.className }
      onSubmit={ this.props.onSubmit }
    >
      { this.props.children }
    </form>;
  }
});
