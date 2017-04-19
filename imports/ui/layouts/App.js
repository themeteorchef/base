import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../components/AppNavigation';

const App = ({ children }) => (
  <div>
    <AppNavigation />
    <Grid>
      { children }
    </Grid>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
