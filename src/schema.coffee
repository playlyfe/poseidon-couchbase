module.exports = {
  "Connection": {
    "require": {
      "Couchbase": "couchbase",
      "ViewQuery": "./viewquery"
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
    "members": {
      "clientVersion": {},
      "connectionTimeout": {},
      "lcbVersion": {},
      "operationTimeout": {},
      "serverNodes": {}
    }
    "functions": {
      "add": {},
      "addMulti": {},
      "append": {},
      "appendMulti": {},
      "arithmeticMulti": {},
      "decr": {},
      "get": {},
      "getDesignDoc": {},
      "getMulti": {},
      "getReplica": {},
      "getReplicaMulti":{},
      "incr": {},
      "lock": {},
      "lockMulti": {},
      "safeLock": {
        "params": ["key", "options", "retries", "deferred"],
        "body": """
        var _result, _this = this;
        if (retries == null) {
          retries = 10;
        }
        _result = deferred != null ? deferred : Promise.pending();
        this.instance.then(function(bucket) {
          return bucket.lock(key, options, function(err, data) {
            if (err != null) {
              if (err.code === 11 && retries > 0) {
                return setTimeout(function() {
                  return _this.safeLock(key, options, retries - 1, _result);
                }, Math.random() * 30);
              } else {
                return _result.reject([err, data]);
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
        this.instance.then(function(bucket) {
          return bucket.remove(key, options, function(err, data) {
            if (err != null) {
              err.key = key;
              if (err.code === 11 && retries > 0) {
                return setTimeout(function() {
                  return _this.safeRemove(key, options, retries - 1, _result);
                }, Math.random() * 30);
              } else {
                return _result.reject([err, data]);
              }
            } else {
              return _result.resolve(data);
            }
          });
        });
        return _result.promise;
        """
      }
      "observe": {},
      "observeMulti": {},
      "on": {},
      "prepend": {},
      "prependMulti": {},
      "remove": {},
      "removeDesignDoc": {},
      "removeMulti": {},
      "replace": {},
      "replaceMulti": {},
      "set": {},
      "setDesignDoc": {},
      "setMulti": {},
      "shutdown": {},
      "stats": {},
      "strError": {
        "body": """
        return this.instance(arguments[0]);
        """
      },
      "touch": {},
      "touchMulti": {},
      "unlock": {},
      "unlockMulti": {},
      "view": {
        "wrap": false
        "return": ["ViewQuery"]
      }
    }
  },
  "ViewQuery": {
    "require": {
      "Paginator": "./paginator"
    },
    "constructor": {
      "params": ["viewQuery"],
      "body": """
      this.instance = viewQuery;
      return;
      """
    },
    "type": "object",
    "functions": {
      "query": {},
      "clone": {
        "wrap": false,
        "return": ["ViewQuery"]
      },
      "firstPage": {
        "return": [null, "Paginator"]
      }
    }
  },
  "Paginator": {
    "constructor": {
      "params": ["paginator"],
      "body": """
      this.instance = paginator;
      return;
      """
    },
    "type": "object",
    "functions": {
      "hasNext": {
        "wrap": false
      },
      "next": {},
      "prev": {}
    }
  }

}
