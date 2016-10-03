import { composeWithTracker } from 'react-komposer';
import { ReactiveVar } from 'meteor/reactive-var';
import { Vehicles } from '../../api/vehicles/vehicles.js';
import { Index } from '../pages/index.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const query = new ReactiveVar('');

const composer = (params, onData) => {
	console.log(query.get());
  const subscription = Meteor.subscribe('vehicles', query.get());
  if (subscription.ready()) {
    const vehicles = Vehicles.find().fetch();
    onData(null, { vehicles, query });
  }
};

export default composeWithTracker(composer, Loading)(Index);
