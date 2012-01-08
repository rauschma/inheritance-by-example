JavaScript inheritance by example
=================================

The source code of the blog post “[JavaScript inheritance by example](http://www.2ality.com/2012/01/js-inheritance-by-example.html)”.

Interaction on Node.js:

    > var point = require("./point");
    > var p = new point.ColorPoint(5, 2);
    > p.dist()
    5.385164807134504

Tests
-----

- Run the tests via [Mocha](http://visionmedia.github.com/mocha/).
- Assertion API: [expect.js](https://github.com/LearnBoost/expect.js).
