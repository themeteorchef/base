const Jumbotron = ReactBootstrap.Jumbotron,
	  Button = ReactBootstrap.Button;

const Main = () => (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <Button bsStyle="primary">Learn more</Button>
  </Jumbotron>
);

ReactDOM.render(<Main />,document.getElementById('container'));