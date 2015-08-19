###
Driver
======
The `Driver` class stores configurations for multiple caches. It also caches
the clients for quick access and reuse.
###
Couchbase = require 'couchbase'
Promise = require 'bluebird'

class Driver

  constructor: () ->
    @_configuration = {}
    @_clusters = {}
    @_connections = {}
    return

  configure: (connName, connConfig) ->
    throw new Error('Configuration object required') unless connConfig?
    @_configuration[connName] = connConfig
    return

  #TODO: Add authorization support
  openConnection: (connName, options = {}) ->
    throw Error('Connection not configured') unless (config = @_configuration[connName])?
    if @_connections[connName]? then return @_connections[connName]

    _defer = Promise.defer()

    if not (cluster = @_clusters[config.host])?
      cluster = @_clusters[config.host] = new Couchbase.Cluster(config.host)

    bucket = cluster.openBucket(config.bucket, (err) ->
      if err then _defer.reject(err)
      else _defer.resolve(bucket)
    )

    @_connections[connName] = _defer.promise

  closeConnection: (connName) ->
    throw Error('Connection does not exist') unless @_connections[connName]?
    @_connections[connName].then (bucket) =>
      bucket.disconnect()
      delete @_connections[connName]
    .done()
    return

  reset: () ->
    for connName, connConfig of @_configuration
      if @_connections[connName]? then @closeConnection(connName)
      delete @_configuration[connName]
    return

  shutdown: () ->
    for connName, connConfig of @_configuration
      if @_connections[connName]? then @closeConnection(connName)
    return

module.exports = Driver
