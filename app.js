var b;
b = 5;
function person(c, d) {
    return c + d;
}
var Technologies;
(function (Technologies) {
    Technologies[Technologies["Angular"] = 0] = "Angular";
    Technologies[Technologies["React"] = 1] = "React";
    Technologies[Technologies["ReactNative"] = 2] = "ReactNative";
})(Technologies || (Technologies = {}));
console.log(Technologies);
;
var kvProcessor = /** @class */ (function () {
    function kvProcessor() {
    }
    kvProcessor.prototype.process = function (key, val) {
        console.log("Key" + key + "val" + val);
    };
    return kvProcessor;
}());
var proc = new kvProcessor();
proc.process(1, 'Bill'); //Output: key = 1, value = Bill 
