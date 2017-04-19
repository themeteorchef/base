import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../../ui/layouts/App.js';

Bert.defaults.style = 'growl-top-right';

Meteor.startup(() => {
  render(
    <App />,
    document.getElementById('react-root'),
  );
});
