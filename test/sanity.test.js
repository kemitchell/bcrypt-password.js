/* jshint mocha: true */
var expect = require('chai').expect;
var lib = require('..');

describe('sanity check', function() {
  it('round-trips a known password', function(done) {
    var password = 'password';
    lib.hash(password, function(error, digest) {
      lib.check(password, digest, function(error, result) {
        expect(result).to.be.true();
        done();
      });
    });
  });
});
