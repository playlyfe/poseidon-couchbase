Promise = require('poseidon').Promise;
function Paginator(paginator) {
    this.instance = paginator;
    return;
}
Paginator.prototype.hasNext = function () {
    var args = arguments;
    switch (args.length) {
    case 0:
        result = this.instance.hasNext();
        break;
    case 1:
        result = this.instance.hasNext(args[0]);
        break;
    case 2:
        result = this.instance.hasNext(args[0], args[1]);
        break;
    case 3:
        result = this.instance.hasNext(args[0], args[1], args[2]);
        break;
    case 4:
        result = this.instance.hasNext(args[0], args[1], args[2], args[3]);
        break;
    case 5:
        result = this.instance.hasNext(args[0], args[1], args[2], args[3], args[4]);
        break;
    default:
        result = this.instance.hasNext.apply(this.instance, args);
        break;
    }
    return result;
};
Paginator.prototype.next = function () {
    var args = arguments;
    var deferred = Promise.pending();
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
        this.instance.next(callback);
        break;
    case 1:
        this.instance.next(args[0], callback);
        break;
    case 2:
        this.instance.next(args[0], args[1], callback);
        break;
    case 3:
        this.instance.next(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.next(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.next(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.next.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
Paginator.prototype.prev = function () {
    var args = arguments;
    var deferred = Promise.pending();
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
        this.instance.prev(callback);
        break;
    case 1:
        this.instance.prev(args[0], callback);
        break;
    case 2:
        this.instance.prev(args[0], args[1], callback);
        break;
    case 3:
        this.instance.prev(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.prev(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.prev(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.prev.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
module.exports = Paginator;