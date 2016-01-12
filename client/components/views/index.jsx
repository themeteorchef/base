Index = React.createClass({
  render() {
    return <Jumbotron className="text-center" style={{ padding: '20' + 'px' }}>
      <h2>Base</h2>
      <p>A starting point for Meteor applications.</p>
      <p>
        <SuccessButton href="http://themeteorchef.com/base" label="Read the Documentation" />    
      </p>
      <p style={{ fontSize: '16px', color: '#aaa' }}>Currently at v3.3.0</p>
    </Jumbotron>;
  }
});
