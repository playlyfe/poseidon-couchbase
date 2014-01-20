Promise = require('poseidon').Promise;
Paginator = require('./paginator');
function ViewQuery(viewQuery) {
    this.instance = viewQuery;
    return;
}
ViewQuery.prototype.query = function () {
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
        this.instance.query(callback);
        break;
    case 1:
        this.instance.query(args[0], callback);
        break;
    case 2:
        this.instance.query(args[0], args[1], callback);
        break;
    case 3:
        this.instance.query(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.query(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.query(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.query.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
ViewQuery.prototype.clone = function () {
    var args = arguments;
    switch (args.length) {
    case 0:
        result = this.instance.clone();
        break;
    case 1:
        result = this.instance.clone(args[0]);
        break;
    case 2:
        result = this.instance.clone(args[0], args[1]);
        break;
    case 3:
        result = this.instance.clone(args[0], args[1], args[2]);
        break;
    case 4:
        result = this.instance.clone(args[0], args[1], args[2], args[3]);
        break;
    case 5:
        result = this.instance.clone(args[0], args[1], args[2], args[3], args[4]);
        break;
    default:
        result = this.instance.clone.apply(this.instance, args);
        break;
    }
    return new ViewQuery(result);
};
ViewQuery.prototype.firstPage = function () {
    var args = arguments;
    var deferred = Promise.pending();
    var callback = function () {
        if (arguments[0]) {
            deferred.reject(arguments[0]);
        } else {
            arguments[1] = new Paginator(arguments[1]);
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
        this.instance.firstPage(callback);
        break;
    case 1:
        this.instance.firstPage(args[0], callback);
        break;
    case 2:
        this.instance.firstPage(args[0], args[1], callback);
        break;
    case 3:
        this.instance.firstPage(args[0], args[1], args[2], callback);
        break;
    case 4:
        this.instance.firstPage(args[0], args[1], args[2], args[3], callback);
        break;
    case 5:
        this.instance.firstPage(args[0], args[1], args[2], args[3], args[4], callback);
        break;
    default:
        this.instance.firstPage.apply(this.instance, Array.prototype.slice.call(null, args).concat(callback));
        break;
    }
    return deferred.promise;
};
module.exports = ViewQuery;