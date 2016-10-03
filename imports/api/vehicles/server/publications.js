import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Vehicles } from '../vehicles.js';

Meteor.publish('vehicles', function(query) {
  check(query, Match.OneOf( String, null, undefined ) );

  let mongoQuery = {};
  let projection = { limit: 50, sort: { make: 1 } };

  if (query) {
    let regex = new RegExp(query, 'i');

    mongoQuery = {
      $or: [
        { make: regex },
        { model: regex },
        { dealername: regex }
      ]
    };

    projection.limit = 100;
  }

  return Vehicles.find(mongoQuery, projection);
});