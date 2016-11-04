/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import Documents from './documents.js';

describe('Documents collection', function () {
  it('registers the collection with Mongo properly', function () {
    assert.equal(typeof Documents, 'object');
  });
});
