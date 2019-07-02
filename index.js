var bcrypt = require('bcrypt')

exports.saltRounds = 10

exports.hash = function (password, callback) {
  bcrypt.genSalt(exports.saltRounds, function (error, salt) {
    if (error) return callback(error)
    bcrypt.hash(password, salt, function (error, digest) {
      if (error) return callback(error)
      callback(null, digest)
    })
  })
}

exports.check = function (password, hash, callback) {
  bcrypt.compare(password, hash, callback)
}

exports.version = '1.0.2'
