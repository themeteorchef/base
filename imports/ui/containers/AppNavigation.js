import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import AppNavigation from '../components/AppNavigation.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('users.info');
  if (subscription.ready()) {
    onData(null, { hasUser: Meteor.user() });
  }
};

export default composeWithTracker(composer, Loading, {}, { pure: false })(AppNavigation);
