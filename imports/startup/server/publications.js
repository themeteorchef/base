import { Location } from '../../api/location/location';
Meteor.publish('location', () => Location.find());

import { Entities } from '../../api/entities/entities';
Meteor.publish('entities', () => Entities.find());
/*
import { Bios } from '../../api/bios/bios';
Meteor.publish('bios',(limit,date) => {
//TESTING
console.log('limit',limit);
//console.log('date',date);
//bio record
//{ "_id" : ObjectId("573c8a3ec66cb6ce2ed724f0"), "stamp" : ISODate("2016-05-18T15:29:02.182Z") }
//TESTING
  check(limit,Number);
//  check(date,Date);
//  return Bios.find({"stamp":{$gt:date}},{limit});
  return Bios.find({},{limit});
});*/