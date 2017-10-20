
window.createShape = function () {
    mainArgs = arguments;
    //console.log("create shape arguments", mainArgs);
    function Position() {
        this.x = arguments[0] || 0;
        this.y = arguments[1] || 0;
    }

    Position.prototype.getPosition = function () {
        return { x: this.x, y: this.y }
    }

    Position.prototype.move = function (left, top) {
        this.x += left;
        this.y += top;
        return this;
    }

    function Shape() {
        //arguments will be served as an array: mainArgs ; the arguments in this scope will be arrayLike and have length == 1 
        //console.log('shape arguments', arguments)
        var args = arguments[0];
        var len = args.length;

        //check if args have non-number/non-number-coercible elements
        for (var i = 0; i < 4; i++) {
            if (typeof args[i] !== 'number' || Number(args[i]) !== Number(args[i])) throw ('coordinates should be numbers')
            else {
                args = [].map.call(args, function (elem) { return Number(elem) })
            }
        }

        //console.log('number args ', args)

        //console.log('shape arg length ', len)
        if (!len) throw ('need arguments');

        if (len % 2 !== 0 && len < 4) throw ('arguments should be even');

        if (len === 2) {
            Position.call(this, null, null);
            //Position(1000, 1000); // playing : Position run as a simple function; `this` was bound to window; worked as expected
            this.width = args[0];
            this.height = args[1];
        } else {
            Position.call(this, args[0], args[1]);
            this.width = args[2];
            this.height = args[3]
        }
    }

    Shape.prototype = Position.prototype;
    Shape.prototype.constructor = Shape;

    return new Shape(mainArgs)

}

createShape(100, 1001, '100', 1000)
