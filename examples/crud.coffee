{Driver, Bucket} = require '../index'

Driver.configure('default', { host: ['localhost:8091'], bucket: 'staging-test' })

bucket = new Bucket('default')

start = new Date()

bucket.remove('test')
.catch (err) ->
  bucket.add('test', { foo: 'bar' })
.then ->
  bucket.get('test')
.then (doc) ->
  console.log "test", doc
  bucket.set('test', { bar: 'foo'})
.then ->
  bucket.get('test')
.then (doc) ->
  console.log "test", doc
  bucket.remove('test')
.catch (err) ->
  console.log err
.finally ->
  bucket.shutdown()
.done()
