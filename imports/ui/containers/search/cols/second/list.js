import { composeWithTracker } from 'react-komposer';
import { List } from '../../../../components/search/cols/second/list';

const composer = (props, onData) => {
  const subscription = Meteor.subscribe('entities');

  if (subscription.ready()) {
  	const entitities = Entities.find().fetch();
  	onData(null, entities);
  }
};

export default composeWithTracker(composer)(List);