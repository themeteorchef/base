import { composeWithTracker } from 'react-komposer';
import { AppNavigation } from '../components/navigation/app';

const composer = (props, onData) => {
  onData(null, { hasUser: Meteor.user() });
};

export default composeWithTracker(composer, {}, {}, { pure: false })(AppNavigation);
