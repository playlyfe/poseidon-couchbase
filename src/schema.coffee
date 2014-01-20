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
        "return": ["Paginator"]
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
