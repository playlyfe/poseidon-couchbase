coffee = require('coffee-script');
var index = null;
if (process.env.PLAYLYFE_TEST) {
  try {
    index = require('./src-cov/couchbase');
  } catch(e) {
    index = require('./lib/couchbase');
  }
} else {
  index = require('./lib/couchbase');
}
module.exports = index;
