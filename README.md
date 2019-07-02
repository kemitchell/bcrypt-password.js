bcrypt-password.js
==================

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
