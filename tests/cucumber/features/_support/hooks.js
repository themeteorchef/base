(function(){
  'use strict';

  module.exports = function() {
    this.Before(function(){
      server.call('emailStub/reset');
      server.call('emailStub/stub');
    });
  }
})();
