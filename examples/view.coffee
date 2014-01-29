{Driver, Bucket} = require '../index'

Driver.configure('default', { host: ['localhost:8091'], bucket: 'staging-test' })

bucket = new Bucket('default')

bucket.view('game-stats', 'leaderboards', { skip: 3, limit: 5, stale: false })
.then (view) ->
  view.firstPage()
.spread (results, paginator) ->
  console.log results
  paginator.next()
.then (results) ->
  console.log results
