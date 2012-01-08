"use strict";

({ define: typeof define === "function" ? define : function(A,F) { module.exports = F.apply(null, A.map(require)) } }).
define([], function() {

    function extend(target, source) {
        Object.getOwnPropertyNames(source).forEach(function(propName) {
            Object.defineProperty(target, propName,
                Object.getOwnPropertyDescriptor(source, propName));
        });
        return target;
    }

    function inherits(SubC, SuperC) {
        var subProto = Object.create(SuperC.prototype);
        // At the very least, we keep the "constructor" property
        // At most, we preserve additions that have already been made
        extend(subProto, SubC.prototype);
        SubC.prototype = subProto;
        SubC._super = SuperC.prototype;
    };

    function protoChain() {
        if (arguments.length === 0) return null;
        var prev = arguments[0];
        for(var i=1; i < arguments.length; i++) {
            // Create duplicate of arguments[i] with prototype prev
            prev = Object.create(prev);
            extend(prev, arguments[i]);
        }
        return prev;
    }

    ////////

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.dist = function () {
        return Math.sqrt((this.x*this.x)+(this.y*this.y));
    };
    Point.prototype.toString = function () {
        return "("+this.x+", "+this.y+")";
    };

    function ColorPoint(x, y, color) {
        ColorPoint._super.constructor.call(this, x, y);
        this.color = color;
    }
    ColorPoint.prototype.toString = function () {
        return this.color+" "+ColorPoint._super.toString.call(this);
    };
    inherits(ColorPoint, Point);
    
    // Exports
    return {
        Point: Point,
        ColorPoint: ColorPoint
    };
});
