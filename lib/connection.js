Promise = require('poseidon').Promise;
Couchbase = require('couchbase');
ViewQuery = require('./viewquery');
Driver = require('./driver');
function Connection(connectionName) {
    this.connectionName = connectionName;
    this.instance = Driver.openConnection(connectionName);
    return;
}
Connection.prototype.add = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.add(callback);
            break;
        case 1:
            instanceValue.add(args[0], callback);
            break;
        case 2:
            instanceValue.add(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.add(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.add(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.add(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.add.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.addMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.addMulti(callback);
            break;
        case 1:
            instanceValue.addMulti(args[0], callback);
            break;
        case 2:
            instanceValue.addMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.addMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.addMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.addMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.addMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.append = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.append(callback);
            break;
        case 1:
            instanceValue.append(args[0], callback);
            break;
        case 2:
            instanceValue.append(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.append(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.append(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.append(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.append.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.appendMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.appendMulti(callback);
            break;
        case 1:
            instanceValue.appendMulti(args[0], callback);
            break;
        case 2:
            instanceValue.appendMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.appendMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.appendMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.appendMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.appendMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.arithmeticMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.arithmeticMulti(callback);
            break;
        case 1:
            instanceValue.arithmeticMulti(args[0], callback);
            break;
        case 2:
            instanceValue.arithmeticMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.arithmeticMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.arithmeticMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.arithmeticMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.arithmeticMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.decr = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.decr(callback);
            break;
        case 1:
            instanceValue.decr(args[0], callback);
            break;
        case 2:
            instanceValue.decr(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.decr(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.decr(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.decr(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.decr.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.get = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.get(callback);
            break;
        case 1:
            instanceValue.get(args[0], callback);
            break;
        case 2:
            instanceValue.get(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.get(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.get(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.get(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.get.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.getDesignDoc = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.getDesignDoc(callback);
            break;
        case 1:
            instanceValue.getDesignDoc(args[0], callback);
            break;
        case 2:
            instanceValue.getDesignDoc(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.getDesignDoc(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.getDesignDoc(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.getDesignDoc(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.getDesignDoc.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.getMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.getMulti(callback);
            break;
        case 1:
            instanceValue.getMulti(args[0], callback);
            break;
        case 2:
            instanceValue.getMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.getMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.getMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.getMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.getMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.getReplica = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.getReplica(callback);
            break;
        case 1:
            instanceValue.getReplica(args[0], callback);
            break;
        case 2:
            instanceValue.getReplica(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.getReplica(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.getReplica(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.getReplica(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.getReplica.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.getReplicaMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.getReplicaMulti(callback);
            break;
        case 1:
            instanceValue.getReplicaMulti(args[0], callback);
            break;
        case 2:
            instanceValue.getReplicaMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.getReplicaMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.getReplicaMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.getReplicaMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.getReplicaMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.incr = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.incr(callback);
            break;
        case 1:
            instanceValue.incr(args[0], callback);
            break;
        case 2:
            instanceValue.incr(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.incr(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.incr(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.incr(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.incr.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.lock = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.lock(callback);
            break;
        case 1:
            instanceValue.lock(args[0], callback);
            break;
        case 2:
            instanceValue.lock(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.lock(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.lock(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.lock(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.lock.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.lockMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.lockMulti(callback);
            break;
        case 1:
            instanceValue.lockMulti(args[0], callback);
            break;
        case 2:
            instanceValue.lockMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.lockMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.lockMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.lockMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.lockMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.observe = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.observe(callback);
            break;
        case 1:
            instanceValue.observe(args[0], callback);
            break;
        case 2:
            instanceValue.observe(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.observe(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.observe(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.observe(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.observe.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.observeMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.observeMulti(callback);
            break;
        case 1:
            instanceValue.observeMulti(args[0], callback);
            break;
        case 2:
            instanceValue.observeMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.observeMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.observeMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.observeMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.observeMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.on = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.on(callback);
            break;
        case 1:
            instanceValue.on(args[0], callback);
            break;
        case 2:
            instanceValue.on(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.on(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.on(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.on(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.on.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.prepend = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.prepend(callback);
            break;
        case 1:
            instanceValue.prepend(args[0], callback);
            break;
        case 2:
            instanceValue.prepend(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.prepend(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.prepend(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.prepend(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.prepend.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.prependMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.prependMulti(callback);
            break;
        case 1:
            instanceValue.prependMulti(args[0], callback);
            break;
        case 2:
            instanceValue.prependMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.prependMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.prependMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.prependMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.prependMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.remove = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.remove(callback);
            break;
        case 1:
            instanceValue.remove(args[0], callback);
            break;
        case 2:
            instanceValue.remove(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.remove(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.remove(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.remove(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.remove.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.removeDesignDoc = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.removeDesignDoc(callback);
            break;
        case 1:
            instanceValue.removeDesignDoc(args[0], callback);
            break;
        case 2:
            instanceValue.removeDesignDoc(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.removeDesignDoc(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.removeDesignDoc(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.removeDesignDoc(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.removeDesignDoc.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.removeMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.removeMulti(callback);
            break;
        case 1:
            instanceValue.removeMulti(args[0], callback);
            break;
        case 2:
            instanceValue.removeMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.removeMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.removeMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.removeMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.removeMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.replace = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.replace(callback);
            break;
        case 1:
            instanceValue.replace(args[0], callback);
            break;
        case 2:
            instanceValue.replace(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.replace(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.replace(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.replace(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.replace.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.replaceMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.replaceMulti(callback);
            break;
        case 1:
            instanceValue.replaceMulti(args[0], callback);
            break;
        case 2:
            instanceValue.replaceMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.replaceMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.replaceMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.replaceMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.replaceMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.set = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.set(callback);
            break;
        case 1:
            instanceValue.set(args[0], callback);
            break;
        case 2:
            instanceValue.set(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.set(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.set(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.set(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.set.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.setDesignDoc = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.setDesignDoc(callback);
            break;
        case 1:
            instanceValue.setDesignDoc(args[0], callback);
            break;
        case 2:
            instanceValue.setDesignDoc(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.setDesignDoc(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.setDesignDoc(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.setDesignDoc(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.setDesignDoc.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.setMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.setMulti(callback);
            break;
        case 1:
            instanceValue.setMulti(args[0], callback);
            break;
        case 2:
            instanceValue.setMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.setMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.setMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.setMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.setMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.shutdown = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.shutdown(callback);
            break;
        case 1:
            instanceValue.shutdown(args[0], callback);
            break;
        case 2:
            instanceValue.shutdown(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.shutdown(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.shutdown(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.shutdown(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.shutdown.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.stats = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.stats(callback);
            break;
        case 1:
            instanceValue.stats(args[0], callback);
            break;
        case 2:
            instanceValue.stats(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.stats(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.stats(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.stats(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.stats.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.strError = function () {
    var args = arguments;
    return this.instance(arguments[0]);
};
Connection.prototype.touch = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.touch(callback);
            break;
        case 1:
            instanceValue.touch(args[0], callback);
            break;
        case 2:
            instanceValue.touch(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.touch(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.touch(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.touch(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.touch.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.touchMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.touchMulti(callback);
            break;
        case 1:
            instanceValue.touchMulti(args[0], callback);
            break;
        case 2:
            instanceValue.touchMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.touchMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.touchMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.touchMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.touchMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.unlock = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.unlock(callback);
            break;
        case 1:
            instanceValue.unlock(args[0], callback);
            break;
        case 2:
            instanceValue.unlock(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.unlock(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.unlock(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.unlock(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.unlock.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.unlockMulti = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.unlockMulti(callback);
            break;
        case 1:
            instanceValue.unlockMulti(args[0], callback);
            break;
        case 2:
            instanceValue.unlockMulti(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.unlockMulti(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.unlockMulti(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.unlockMulti(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.unlockMulti.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
Connection.prototype.view = function () {
    var args = arguments;
    var deferred = Promise.pending();
    this.instance.then(function (instanceValue) {
        var callback = function () {
            if (arguments[0]) {
                deferred.reject(arguments[0]);
            } else {
                arguments[1] = new ViewQuery(arguments[1]);
                switch (arguments.length) {
                case 2:
                    deferred.resolve(arguments[1]);
                    break;
                case 3:
                    deferred.resolve([
                        arguments[1],
                        arguments[2]
                    ]);
                    break;
                case 4:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3]
                    ]);
                    break;
                case 5:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4]
                    ]);
                    break;
                case 6:
                    deferred.resolve([
                        arguments[1],
                        arguments[2],
                        arguments[3],
                        arguments[4],
                        arguments[5]
                    ]);
                    break;
                default:
                    deferred.resolve(arguments.slice(1));
                    break;
                }
            }
        };
        switch (args.length) {
        case 0:
            instanceValue.view(callback);
            break;
        case 1:
            instanceValue.view(args[0], callback);
            break;
        case 2:
            instanceValue.view(args[0], args[1], callback);
            break;
        case 3:
            instanceValue.view(args[0], args[1], args[2], callback);
            break;
        case 4:
            instanceValue.view(args[0], args[1], args[2], args[3], callback);
            break;
        case 5:
            instanceValue.view(args[0], args[1], args[2], args[3], args[4], callback);
            break;
        default:
            instanceValue.view.apply(instanceValue, Array.prototype.slice.call(null, args).concat(callback));
            break;
        }
    });
    return deferred.promise;
};
module.exports = Connection;