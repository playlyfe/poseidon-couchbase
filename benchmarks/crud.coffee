Couchbase = require 'couchbase'
{Driver, Bucket} = require '../index'
Benchmark = require 'benchmark'

suite = new Benchmark.Suite()
nativeCb = null

simpleCouchbase = (deferred) ->
  nativeCb.remove('test', (err) ->
    nativeCb.add('test', { foo: 'bar' }, ->
      nativeCb.get('test', ->
        nativeCb.set('test', { bar: 'foo' }, ->
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
  poseidonCb = new Bucket('default')
  poseidonCb.remove('test')
  .catch (err) ->
    poseidonCb.add('test', { foo: 'bar' })
  .then ->
    poseidonCb.get('test')
  .then (doc) ->
    poseidonCb.set('test', { bar: 'foo'})
  .then ->
    poseidonCb.get('test')
  .then (doc) ->
    poseidonCb.remove('test')
  .done ->
    deferred.resolve()
  return

nativeCb = new Couchbase.Connection({ bucket: 'staging-test', host: ["localhost:8091"] }, () ->
  Driver.configure('default', { host: ['localhost:8091'], bucket: 'staging-test' })
  Driver.openConnection('default')
  .then ->
    suite
    .add('Simple Couchbase', { fn: simpleCouchbase, defer: true, minSamples: 100 })
    .add('Poseidon Couchbase', { fn: poseidonCouchbase, defer: true, minSamples: 100 })
    .on('cycle', (event) ->
      console.log(String(event.target));
    )
    .on('complete', () ->
      console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    )
    suite.run()
)
