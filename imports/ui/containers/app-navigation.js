import { createContainer } from 'meteor/react-meteor-data';
import { AppNavigation } from '../components/app-navigation';

export default createContainer( ( { params } ) => {
  return { hasUser: Meteor.user() };
}, AppNavigation );
