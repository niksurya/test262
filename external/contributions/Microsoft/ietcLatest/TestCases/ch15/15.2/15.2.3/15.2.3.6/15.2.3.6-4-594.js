/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-594.js
 * @description ES5 Attributes - Success to update value of property into of [[Proptotype]] internal property (Function.prototype.bind)
 */


function testcase() {
        var foo = function () { };
        var data = "data";
        try {
            Object.defineProperty(Function.prototype, "prop", {
                get: function () {
                    return data;
                },
                set: function (value) {
                    data = value;
                },
                enumerable: true,
                configurable: true
            });

            var obj = foo.bind({});
            obj.prop = "overrideData";

            return !obj.hasOwnProperty("prop") && obj.prop === "overrideData";
        } finally {
            delete Function.prototype.prop;
        }
    }
runTestCase(testcase);
