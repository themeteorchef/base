import { composeWithTracker } from 'react-komposer';
import { Loading } from '../../../components/loading';

import { Results } from '../../../components/search/results/results';

import { Bios } from '../../../../api/bios/bios';
import { Jobs } from '../../../../api/jobs/jobs';

const composer = (params,onReady) => {
  const subscription = Meteor.subscribeWithPagination('bios',3);
//TESTING
console.log(subscription.loaded());
console.log(subscription.limit());
console.log(subscription.ready());
//console.log(subscription.loadNextPage());
//TESTING
  if(false){
    let results = Bios.find().fetch();
    onReady(null,{results, subscription});
  }
};

//Loading.test = "10px";//document.getElementById("react-root").clientWidth+"px";

export default composeWithTracker(composer,Loading)(Results);