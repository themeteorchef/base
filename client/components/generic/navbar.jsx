NavBar = React.createClass({
  render() {
    return <nav className="navbar navbar-default" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target={ `#navbar-${ this.props.id }` }>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href={ this.props.brandLink }>{ this.props.brand }</a>
        </div>
        <div className="collapse navbar-collapse" id={ `navbar-${ this.props.id }` }>
          { this.props.children }
        </div>
      </div>
    </nav>;
  }
});
