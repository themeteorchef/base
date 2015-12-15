ProgressBar = React.createClass({
  completion() {
    return `${ this.props.current } of ${ this.props.total }`;
  },
  percentage() {
    let current = this.props.current,
        total   = this.props.total;
    return Math.floor( ( current / total ) * 100 );
  },
  getStyle( percentage ) {
    if ( percentage < 30  ) { return 'danger'; }
    if ( percentage >= 30 && percentage < 60 ) { return 'warning'; }
    if ( percentage > 60  ) { return 'ok'; }
  },
  render() {
    let style   = this.getStyle( this.percentage() ),
        classes = `react-progress-bar ${ style }`;

    return <div className={ classes }>
      <div className="labels">
        <span className="completion">{ this.completion() }</span>
        <span className="percentage">{ `${ this.percentage() }%` }</span>
      </div>
      <div className="bar">
        <div style={{ width: this.percentage() + "%" }} className="fill"></div>
      </div>
    </div>;
  }
});
