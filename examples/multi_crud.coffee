{Driver, Bucket} = require '../index'

Driver.configure('default', { host: ['localhost:8091'], bucket: 'staging-test' })

bucket = new Bucket('default')

start = new Date()

bucket.removeMulti(['foo', 'bar'], { spooled: true })
.catch (err) ->
  bucket.addMulti({ 'foo': { value: { foo: 'bar' } }, 'bar': { value: { bar: 'foo' } } }, { spooled: true })
.then ->
  bucket.getMulti(['foo', 'bar'], { spooled: true })
.then (doc) ->
  console.log "test", doc
  bucket.setMulti({ 'bar': { value: { foo: 'bar' } }, 'foo': { value: { bar: 'foo' } } }, { spooled: true })
.then ->
  bucket.getMulti(['foo', 'bar'], { spooled: true })
.then (doc) ->
  console.log "test", doc
  bucket.removeMulti(['foo', 'bar'], { spooled: true })
.catch (err) ->
  console.log err
.finally ->
  bucket.shutdown()
.done()
