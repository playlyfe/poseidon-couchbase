Bucket
======
The `Bucket` class represent a couchbase bucket in which objects can be stored
and retrieved.

    Driver = require './driver'
    poseidon = require 'poseidon'

    class Bucket
      constructor: (connName) ->
        @_connName = connName
        @_bucket = Driver.openConnection @_connName
        [
          'on'
          'shutdown'
          'touch'
          'get'
          'getAndLock'
          'unlock'
          'set'
          'remove'
          'replace'
          'add'
          'append'
          'prepend'
          'view'
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

      end: () ->
        Driver.closeConnection @_connName
        return

    module.exports = Bucket
