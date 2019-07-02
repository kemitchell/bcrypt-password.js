var assert = require('assert')
var lib = require('./')

var password = 'password'
lib.hash(password, function (error, digest) {
  lib.check(password, digest, function (error, result) {
    assert(result === true)
  })
})
