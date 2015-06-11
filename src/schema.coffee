module.exports = {
  "Bucket": {
    "require": {
      "Couchbase": "couchbase",
      "Driver": "./driver"
    },
    "constructor": {
      "params": ["connectionName"]
      "body": """
      this.connectionName = connectionName;
      this.instance = Driver.openConnection(connectionName);
      return;
      """
    },
    "type": "promise",
    "functions": {
      "append": {},
      "counter": {},
      "get": {},
      "getAndLock": {},
      "getAndTouch": {},
      "getMulti": {},
      "getReplica": {},
      "insert": {},
      "prepend": {},
      "remove": {},
      "replace": {},
      "touch": {},
      "unlock": {},
      "upsert": {}
      "safeLock": {
        "params": ["key", "options", "retries", "deferred"],
        "body": """
        var _result, _this = this;
        if (retries == null) {
          retries = 10;
        }
        _result = deferred != null ? deferred : Promise.pending();
        this.instance.catch(function(err) {
          _result.reject(err);
          return _result.promise;
        }).then(function(bucket) {
          return bucket.getAndLock(key, options, function(err, data) {
            if (err != null) {
              if (err.code === 11 && retries > 0) {
                return setTimeout(function() {
                  return _this.safeLock(key, options, retries - 1, _result);
                }, Math.random() * 30);
              } else {
                return _result.reject(err);
              }
            } else {
              return _result.resolve(data);
            }
          });
        });
        return _result.promise;
        """
      },
      "safeRemove": {
        "params": ["key", "options", "retries", "deferred"],
        "body": """
        var _result, _this = this;
        if (options == null) {
          options = {};
        }
        if (retries == null) {
          retries = 10;
        }
        _result = deferred != null ? deferred : Promise.pending();
        this.instance.catch(function(err) {
          _result.reject(err);
          return _result.promise;
        }).then(function(bucket) {
          return bucket.remove(key, options, function(err, data) {
            if (err != null) {
              err.key = key;
              if (err.code === 11 && retries > 0) {
                return setTimeout(function() {
                  return _this.safeRemove(key, options, retries - 1, _result);
                }, Math.random() * 30);
              } else {
                return _result.reject(err);
              }
            } else {
              return _result.resolve(data);
            }
          });
        });
        return _result.promise;
        """
      },
      "query": {},
      "manager": {
        "wrap": false
      }
    }
  }
}
