Driver
======
The `Driver` class stores configurations for multiple caches. It also caches
the clients for quick access and reuse.

    Couchbase = require 'couchbase'
    Q = require 'q'


    class Driver
      @_configuration: {}
      @_connections: {}
      @configure: (connName, connConfig) ->
        throw new Error('Configuration object required') unless connConfig?
        @_configuration[connName] = connConfig
        return

      #TODO: Add authorization support
      @openConnection: (connName) ->
        throw Error('Connection not configured') unless @_configuration[connName]?
        if @_connections[connName]? then return @_connections[connName]
        connection = Q.ninvoke Couchbase, 'connect', @_configuration[connName]
        connection.then =>
          @_connections[connName] = connection
        .fail (err) =>
          @openConnection(connName)

      @closeConnection: (connName) ->
        throw Error('Connection does not exist') unless @_connections[connName]?
        @_connections[connName].then (bucket) -> bucket.shutdown()
        delete @_connections[connName]
        return

      @reset: () ->
        for connName, connConfig of @_configuration
          if @_connections[connName]? then @closeConnection(connName)
          delete @_configuration[connName]
        return

      @shutdown: () ->
        for connName, connConfig of @_configuration
          if @_connections[connName]? then @closeConnection(connName)
        return

    module.exports = Driver
