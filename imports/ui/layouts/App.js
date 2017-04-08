import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppNavigation from '../containers/AppNavigation.js';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconRestore from 'material-ui/svg-icons/action/restore';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentIcon = <IconRestore/>;
const favoriteIcon = <IconFavorite/>;
const locationOnIcon = <IconLocationOn/>;

const App = ({children}) => (
  <MuiThemeProvider>
    <div>
      <AppNavigation/> {children}

      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={1}>
          <BottomNavigationItem label="Recents" icon={recentIcon} onTouchTap={() => this.select(0)}/>
          <BottomNavigationItem label="Favorites" icon={favoriteIcon} onTouchTap={() => this.select(1)}/>
          <BottomNavigationItem label="Nearby" icon={locationOnIcon} onTouchTap={() => this.select(2)}/>
        </BottomNavigation>
      </Paper>
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
