{Driver, Bucket} = require '../index'

Driver.configure('default', { hosts: ['localhost:8091'], bucket: 'production' })
bucket = new Bucket('default')
start = new Date()
bucket.add('test', { foo: 'bar' })
.then ->
  #console.log 'object added'
  bucket.add('test', {foo: 'bar'})
.then ([obj]) ->
  #console.log 'object retrieved', obj
  bucket.remove('test')
.then ->
  #console.log 'object deleted'
  bucket.add('test', {foo: 'bar returns' })
.then ->
  bucket.add('test2', {bar: 'foo'})
.then ->
  #console.log 'new objects added'
  #console.log arguments
  bucket.get(['test', 'test2'], null)
.spread (objs, metas) ->
  #console.log 'objects retrieved', objs
  bucket.remove('test')
.then ->
  bucket.remove('test2')
.fail (err) ->
  console.error err
.finally ->
  console.log new Date() - start
  console.log 'connection closed'
  bucket.shutdown()
.done()
