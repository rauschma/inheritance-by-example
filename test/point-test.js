({ define: typeof define === "function" ? define : function(A,F) { module.exports = F.apply(null, A.map(require)) } }).
define([ "expect.js", "../point" ],
    function(expect, point) {
        describe("getTypeName", function() {
            it("works", function() {
                var cp = new point.ColorPoint(5, 3, "red");
                expect(cp.toString()).to.be("red (5, 3)");
            });
        });
    }
);
