Bucket
======
The `Bucket` class represent a couchbase bucket in which objects can be stored
and retrieved.

    Connection = require './connection'

    class Bucket extends Connection

      constructor: (connectionName) ->
        super
        return

      safeRemove: (key, deferred) ->
        _result = deferred ? Promise.pending()
        @instance.then (bucket) =>
          bucket.remove key, (err, data) =>
            if err?
              err.key = key
              if err.code is 11
                console.log "Remove failed, retrying #{key}"
                console.log _result.promise.isFulfilled()
                setTimeout =>
                  @safeRemove(key, _result)
                , 1000
              else _result.reject err
            else _result.resolve(data)
        _result.promise

      getAndLock: (key, locktime, retries = 10) ->
        _result = Promise.pending()
        @instance.then (bucket) =>
          bucket.lock key, locktime: locktime, (err, data) =>
            if err?
              if err.code is 11 and retries > 0
                setTimeout =>
                 _result.resolve @getAndLock(key, locktime, retries - 1)
                , Math.random() * 30
              else _result.reject err
            else
              _result.resolve [data.value, data]
        _result.promise

    module.exports = Bucket
