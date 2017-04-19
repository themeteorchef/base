import { Meteor } from 'meteor/meteor';
import AppNavigation from '../components/AppNavigation.js';
import composeWithTracker from '../../modules/compose-with-tracker';

const composer = (props, onData) => onData(null, { hasUser: Meteor.user() });

export default composeWithTracker(composer, false)(AppNavigation);

