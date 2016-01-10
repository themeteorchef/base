Button = React.createClass({
  render() {
    return <button type={ this.props.type } className={ `btn btn-${ this.props.style }` }>
      { this.props.label }
    </button>;
  }
});
