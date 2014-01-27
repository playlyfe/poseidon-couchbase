###
Poseidon Couchbase
==================
The **Poseidon Couchbase** module provides convenient low level memcache access
using **Bluebird promises**.
###
Driver = require './driver'
Bucket = require './connection'
Promise = require 'bluebird'

module.exports =
  Driver: Driver
  Bucket: Bucket
  Promise: Promise
