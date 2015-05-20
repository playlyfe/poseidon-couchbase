# Poseidon Couchbase
A future wrapper around the Couchbase driver using Poseidon

##Install
To get started simply run

npm install poseidon-couchbase

##Using
All the normal couchbase methods are supported

```coffeescript
Couchbase = require('poseidon-couchbase')
#Couchbase.Driver.configure('default', 'default')
bucket = new Couchbase.Bucket('default')

bucket.set("my_data", { name: "Brett", age:"44"})
.then ->
  bucket.get("my_data")
.then (response) ->
  console.log(response.value)
  # That will be { name: "Brett", age:"44"}
```
