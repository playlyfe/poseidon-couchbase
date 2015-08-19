Couchbase = require '../index'
Driver = new Couchbase.Driver()
ViewQuery = Couchbase.ViewQuery
Bucket = Couchbase.Bucket

Driver.configure('default', { host: ['localhost:8091'], bucket: 'staging' })

bucket = new Bucket(Driver, 'default')

vq = ViewQuery.from('dev_1', '1')
bucket.query(vq)
.then (view) ->
  console.log view
.finally ->
  bucket.disconnect()
.done()
