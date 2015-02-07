var bcrypt = require('bcrypt');

exports.saltRounds = 10;

exports.hash = function(password, callback) {
  bcrypt.genSalt(exports.saltRounds, function(error, salt) {
    bcrypt.hash(password, salt, function(error, digest) {
      callback(null, digest);
    });
  });
};

exports.check = function(password, hash, callback) {
  bcrypt.compare(password, hash, callback);
};

exports.version = '1.0.2';
