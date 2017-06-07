import React from 'react';
import FontIcon from 'material-ui/FontIcon';

const data = {
  authenticated_menus: [
    {
      text: 'Home',
      icon: <FontIcon className="fa fa-home"/>,
      link: '/'
    }, {
      text: 'Documents',
      icon: <FontIcon className="fa fa-file"/>,
      link: '/documents'
    }
  ],
  public_menus: [
    {
      text: 'Sign Up',
      icon: <FontIcon className="fa fa-user-plus"/>,
      link: '/signup'
    }, {
      text: 'Recover Password',
      icon: <FontIcon className="fa fa-key"/>,
      link: '/recover-password'
    }
  ],
  DRAWER_WIDTH: 230,
  APPBAR_HEIGHT: 50
};

export default data;
