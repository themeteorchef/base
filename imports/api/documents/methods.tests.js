/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Documents from './documents.js';
import { upsertDocument, removeDocument } from './methods.js';

describe('Documents methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a document into the Documents collection', function () {
    upsertDocument.call({
      title: 'You can\'t arrest me, I\'m the Cake Boss!',
      body: 'They went nuts!',
    });

    const getDocument = Documents.findOne({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
    assert.equal(getDocument.body, 'They went nuts!');
  });

  it('updates a document in the Documents collection', function () {
    const { _id } = Factory.create('document');

    upsertDocument.call({
      _id,
      title: 'You can\'t arrest me, I\'m the Cake Boss!',
      body: 'They went nuts!',
    });

    const getDocument = Documents.findOne(_id);
    assert.equal(getDocument.title, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('removes a document from the Documents collection', function () {
    const { _id } = Factory.create('document');
    removeDocument.call({ _id });
    const getDocument = Documents.findOne(_id);
    assert.equal(getDocument, undefined);
  });
});
