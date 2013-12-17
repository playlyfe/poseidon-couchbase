Bucket
======
The `Bucket` class represent a couchbase bucket in which objects can be stored
and retrieved.

    Driver = require './driver'
    poseidon = require 'poseidon'
    Q = require 'q'
    _ = require 'underscore'

    class Bucket
      constructor: (connName) ->
        @_connName = connName
        @_bucket = Driver.openConnection @_connName
        [
          'on'
          'shutdown'
          'touch'
          'set'
          'setMulti'
          'remove'
          'replace'
          'add'
          'append'
          'prepend'
          'incr'
          'decr'
          'observe'
          'endure'
          'setDesignDoc'
          'getDesignDoc'
          'deleteDesignDoc'
          'getVersion'
          'strError'
        ].forEach (fn) ->
          @[fn] = poseidon.wrapPromise @_bucket, fn
        , @
        return

      safeRemove: (key, deferred) ->
        _result = deferred ? Q.defer()
        @_bucket.then (bucket) =>
          bucket.remove key, (err, data) =>
            if err?
              console.log "error code #{err.code}"
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

      get: (keys, options) ->
        _result = Q.defer()
        if _.isArray keys
          @_bucket.then (bucket) ->
            bucket.getMulti(keys, { spooled: true }, (err, data) ->
              if err
                if err.code is 4101
                  for index, key of keys
                    _obj = data[key]
                    if _obj.error?
                      keys[index] = _obj.error
                    else
                      keys[index] = _obj.value
                  return _result.reject keys
                else return _result.reject err
              values = []
              metas = []
              for index, key of keys
                _obj = data[key]
                values[index] = _obj.value
                metas.push _obj
              _result.resolve [values, metas]
            )
        else
          @_bucket.then (bucket) ->
            bucket.get(keys, (err, data) ->
              if err then return _result.reject err
              _result.resolve([data.value, data])
            )
        _result.promise

      view: (designDoc, viewName, params) ->
        _result = Q.defer()
        @_bucket.then (bucket) ->
          getView = ((bucket) ->
            _view = bucket.view(designDoc, viewName, params)
            _view.query (err, view) ->
              if err?.reason is 'view_undefined'
                getView(bucket)
              else
                _result.resolve(view)
          )
          getView(bucket)
        .fail (err) ->
          _result.reject err
        .done()
        _result.promise

      getAndLock: (key, locktime, retries = 10) ->
        _result = Q.defer()
        @_bucket.then (bucket) =>
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

      unlock: (key, meta) ->
        _result = Q.defer()
        @_bucket.then (bucket) =>
          bucket.unlock key, meta, (err, data) =>
            if err?
              _result.reject err
            else
              _result.resolve data
        _result.promise

      end: () ->
        Driver.closeConnection @_connName
        return

    module.exports = Bucket
