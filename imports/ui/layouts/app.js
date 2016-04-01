import React from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../containers/app-navigation';

export const App = React.createClass({
  contextTypes: {
    router() {
      return React.PropTypes.func.isRequired;
    }
  },
  render() {
    return <div>
      <AppNavigation />
      <Grid>
        { this.props.children }
      </Grid>
    </div>;
  }
});
