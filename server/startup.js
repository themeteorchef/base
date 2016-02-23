import setBrowserPolicies from './modules/set-browser-policies';
import seedDatabase from './modules/seed-database';

Meteor.startup( () => {
  setBrowserPolicies();
  seedDatabase();
});
