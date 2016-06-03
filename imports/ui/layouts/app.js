import React from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../containers/app-navigation';
import Confirm from '../components/confirm';

export const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return <div>
      <AppNavigation />
      <Confirm />
      <Grid>
        { this.props.children }
      </Grid>
    </div>;
  },
});
