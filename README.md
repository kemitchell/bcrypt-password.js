bcrypt-password.js
==================

[![NPM version](https://img.shields.io/npm/v/bcrypt-password.svg)](https://www.npmjs.com/package/bcrypt-password)
[![build status](https://img.shields.io/travis/kemitchell/bcrypt-password.js.svg)](http://travis-ci.org/kemitchell/bcrypt-password.js)

Convenience package exporting password hashing and checking functions recommended by [bcrypt][bcrypt].

```javascript
var password = require('bcrypt-password')

var secret = 'open sesame'
password.hash(secret, function (error, digest) {
  password.check(secret, digest, function (error, match) {
    // ...
  })
})
```

[bcrypt]: https://www.npmjs.com/package/bcrypt
