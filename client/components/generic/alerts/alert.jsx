Alert = React.createClass({
  render() {
    return <p className={ `alert alert-${ this.props.style }` }>
      { this.props.children }
    </p>;
  }
});
