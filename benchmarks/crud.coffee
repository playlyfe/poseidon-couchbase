Couchbase = require 'couchbase'
{Driver, Bucket} = require '../index'
Driver = new Driver()
Benchmark = require 'benchmark'

suite = new Benchmark.Suite()
nativeCb = null

simpleCouchbase = (deferred) ->
  nativeCb.remove('test', (err) ->
    nativeCb.insert('test', { foo: 'bar' }, ->
      nativeCb.get('test', ->
        nativeCb.upsert('test', { bar: 'foo' }, ->
          nativeCb.get('test', ->
            nativeCb.remove('test', ->
              deferred.resolve()
            )
          )
        )
      )
    )
  )

poseidonCouchbase = (deferred) ->
  poseidonCb = new Bucket(Driver, 'default')
  poseidonCb.remove('test')
  .catch (err) ->
    poseidonCb.insert('test', { foo: 'bar' })
  .then ->
    poseidonCb.get('test')
  .then (doc) ->
    poseidonCb.upsert('test', { bar: 'foo'})
  .then ->
    poseidonCb.get('test')
  .then (doc) ->
    poseidonCb.remove('test')
  .done ->
    deferred.resolve()
  return

cluster = new Couchbase.Cluster('localhost:8091')

Driver.configure('default', { host: 'localhost:8091', bucket: 'objects' })
Driver.openConnection('default')

nativeCb = cluster.openBucket('objects', (err) ->
  if err then console.log(err)
  suite
  .add('Simple Couchbase', { fn: simpleCouchbase, defer: true, minSamples: 150 })
  .add('Poseidon Couchbase', { fn: poseidonCouchbase, defer: true, minSamples: 150 })
  .on('cycle', (event) ->
    console.log(String(event.target));
  )
  .on('complete', () ->
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    Driver.shutdown()
    nativeCb.disconnect()
  )
  suite.run()
)
