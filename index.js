coffee = require('coffee-script');
var index = null;
if (process.env.PLAYLYFE_TEST) {
  try {
    index = require('./src-cov/couchbase');
  } catch(e) {
    index = require('./src/couchbase');
  }
} else {
  index = require('./src/couchbase');
}
module.exports = index;
