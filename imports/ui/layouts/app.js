import React from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../containers/app-navigation';

export const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  contextTypes: {
    router() {
      return React.PropTypes.func.isRequired;
    },
  },
  render() {
    const { isActive } = this.context.router;
    return <div>
      <AppNavigation activeRoute={ isActive } />
      <Grid>
        { this.props.children }
      </Grid>
    </div>;
  },
});
