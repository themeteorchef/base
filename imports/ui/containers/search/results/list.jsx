import { composeWithTracker } from 'react-komposer';
import { Loading } from '../../../components/loading';

import { Results } from '../../../components/search/results/results';

import { Bios } from '../../../../api/bios/bios';
import { Jobs } from '../../../../api/jobs/jobs';

const composer = (params,onReady) => {
  let now = new Date();
  const subscription = Meteor.subscribe('bios',3,now);
//TESTING
//console.log('now',now);
console.log(subscription.ready());
//TESTING
  if(subscription.ready()){
    let results = Bios.find().fetch();
//TESTING
results.map((result) => {
  console.log(result._id._str);
//get last stamp
});
//TESTING
    onReady(null,{results/*,subscription*/});
  }
};

export default composeWithTracker(composer,Loading)(Results);