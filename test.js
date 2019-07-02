var assert = require('assert')
var lib = require('./')

var password = 'password'
lib.hash(password, function (error, digest) {
  assert.ifError(error)
  lib.check(password, digest, function (error, result) {
    assert.ifError(error)
    assert(result === true)
  })
})
