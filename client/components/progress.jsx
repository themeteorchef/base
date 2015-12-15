Progress = React.createClass({
  getInitialState() {
    return {
      value: 25
    };
  },
  setValue() {
    this.setState( { value: this.refs.range.getDOMNode().value } );
  },
  render() {
    return <div className="react-progress-example">
      <input
        ref="range"
        type="range"
        min="0"
        max="100"
        defaultValue={ this.state.value }
        onChange={ this.setValue }
      />
      <ProgressBar current={ this.state.value } total="100" />
    </div>;
  }
});

// Parent = React.createClass({
//   getInitialState() {
//     return {
//       tacos: [ 'Guacamole', 'Beef', 'Bean' ]
//     };
//   },
//   handleReverse() {
//     this.setState( { tacos: this.state.tacos.reverse() } );
//   },
//   render() {
//     return <div className="parent-component">
//       <h3 onClick={ this.handleReverse }>List of tacos:</h3>
//       <TacosList tacos={ this.state.tacos } />
//     </div>;
//   }
// });
//
// TacosList = React.createClass({
//   render() {
//     return <div className="tacos-list">
//       {this.props.tacos.map( ( taco, index ) => {
//       	return <p key={ `taco-${ index }` }>{ taco }</p>;
//       })}
//     </div>;
//   }
// });
