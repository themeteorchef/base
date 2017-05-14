import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Data from '../data';

export default class Menu extends React.Component {
  render() {
    const {isMobile, isDrawerOpen, menus, handleDrawerToggle} = this.props;

    //TODO: add this to the theme-defaults
    const styles = {
      menuItem: {
        color: white
      }
    };

    //TODO: add containerStyle to the theme-defaults
    return (
      <Drawer onRequestChange={handleDrawerToggle} containerStyle={{
        top: Data.APPBAR_HEIGHT
      }} docked={!isMobile} open={!isMobile || isDrawerOpen}>
        {menus.map((menu, index) => <MenuItem onTouchTap={handleDrawerToggle} key={index} style={styles.menuItem} primaryText={menu.text} leftIcon={menu.icon} containerElement={< Link to = {
          menu.link
        } />}/>)}
      </Drawer>
    );
  }
}

Menu.propTypes = {
  isMobile: PropTypes.bool,
  isDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  handleDrawerToggle: PropTypes.func
};
