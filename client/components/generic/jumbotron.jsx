Jumbotron = React.createClass({
  render() {
    let classes = `jumbotron ${ this.props.className }`;
    return <div className={ classes }>
      { this.props.children }
    </div>;
  }
});
