Index = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    Meteor.subscribe( 'index' );

    return {};
  },
  render() {
    return <Jumbotron className="text-center">
      <h2>Base</h2>
      <p>A starting point for Meteor applications.</p>
      <p>
        <SuccessButton href="http://themeteorchef.com/base" label="Read the Documentation" />
      </p>
      <p style={{ fontSize: '16px', color: '#aaa' }}>Currently at v3.3.0</p>
    </Jumbotron>;
  }
});
