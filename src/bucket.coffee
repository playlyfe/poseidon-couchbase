###
Bucket
======
The `Bucket` class represent a couchbase bucket in which objects can be stored
and retrieved.
###
Connection = require './connection'

class Bucket extends Connection

  constructor: (connectionName) ->
    super
    return

  safeRemove: (key, options = {}, retries = 10, deferred) ->
    _result = deferred ? Promise.pending()
    @instance.then (bucket) =>
      bucket.remove key, options, (err, data) =>
        if err?
          if err.code is 11 and retries > 0
            setTimeout =>
              @safeRemove(key, options, retries - 1, _result)
            , Math.random() * 30
          else _result.reject [err, data]
        else _result.resolve(data)
    _result.promise

  safeLock: (key, options , retries = 10, deferred) ->
    _result = deferred ? Promise.pending()
    @instance.then (bucket) =>
      bucket.lock key, options, (err, data) =>
        if err?
          if err.code is 11 and retries > 0
            setTimeout =>
             @safeLock(key, options, retries - 1, _result)
            , Math.random() * 30
          else _result.reject [err, data]
        else
          _result.resolve(data)
    _result.promise

module.exports = Connection
