var assert = require('chai').assert;
var states = require('..');

describe('xhr-readystate', function(){

  it('is an object', function() {
    assert(typeof states == 'object');
  });

  it('has 5 keys', function() {
    assert(Object.keys(states).length == 5);
  });

  Object.keys(states).forEach(function (state) {

    it(state + ' value is numeric', function() {
      assert(typeof states[state] == 'number');
    });

  });

});
