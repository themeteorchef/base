import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import parser from 'xml2json';
import { Vehicles } from '../vehicles.js';

Meteor.methods({
	importVehicles(xml) {
		check(xml, String);
		const rawJSON = JSON.parse(parser.toJson(xml));
		const items = rawJSON.inventory.item;
		items.forEach((item) => Vehicles.insert(item));
	}
});