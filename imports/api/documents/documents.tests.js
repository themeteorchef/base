/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'meteor/practicalmeteor:chai';
import { Documents } from './documents.js';

describe('Documents collection', function () {
  it('registers the collection with Mongo properly', function () {
    expect(Documents).to.be.an('object');
  });
});
