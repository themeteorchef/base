Jumbotron = React.createClass({
  render() {
    let classes = `jumbotron ${ this.props.className }`;
    return <div className={ classes } style={ this.props.style }>
      { this.props.children }
    </div>;
  }
});
