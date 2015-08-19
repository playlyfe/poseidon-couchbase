Couchbase = require '../index'
Driver = new Couchbase.Driver()
Bucket = Couchbase.Bucket

Driver.configure('default', { host: ['localhost:8091'], bucket: 'staging' })

bucket = new Bucket(Driver, 'default')

start = new Date()

bucket.remove('test')
.catch (err) ->
  bucket.insert('test', { foo: 'bar' })
.then ->
  bucket.get('test')
.then (doc) ->
  console.log "test", doc
  bucket.upsert('test', { bar: 'foo'})
.then ->
  bucket.get('test')
.then (doc) ->
  console.log "test", doc
  bucket.remove('test')
.catch (err) ->
  console.log err.stack
.finally ->
  bucket.disconnect()
.done()
