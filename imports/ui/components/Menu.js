import React, {
  PropTypes
} from 'react';
import Drawer from 'material-ui/Drawer';
import {
  spacing,
  typography
} from 'material-ui/styles';
import {
  white,
  blue600
} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {
  Link
} from 'react-router';

const Menu = ({
  isMobile,
  isDrawerOpen,
  menus,
  handleDrawerToggle
}) => {
  //TODO: add this to the theme-defaults
  const styles = {
    menuItem: {
      color: white
    }
  };

  return (
    //TODO: add containerStyle to the theme-defaults
    <Drawer containerStyle={{top: 64}} docked={true} open={!isMobile || isDrawerOpen}>
      {menus.map((menu, index) =>
        <MenuItem
          onTouchTap={handleDrawerToggle}
          key={index}
          style={styles.menuItem}
          primaryText={menu.text}
          leftIcon={menu.icon}
          containerElement={<Link to={menu.link}/>}
        />)
      }
    </Drawer>
  );
};

Menu.propTypes = {
  isMobile: PropTypes.bool,
  isDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  handleDrawerToggle: PropTypes.func
};

export default Menu;
