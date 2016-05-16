import { Location } from '../../api/location/location';
Meteor.publish('location', () => Location.find());

import { Entities } from '../../api/entities/entities';
Meteor.publish('entities', () => Entities.find());

import { Bios } from '../../api/bios/bios';
Meteor.publish('bios',(limit) => {
  check(limit,Number);
  Bios.find({},{limit});
});