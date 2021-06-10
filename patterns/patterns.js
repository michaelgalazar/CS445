"use strict";
/*eslint-disable*/

//A closure is a function with access to the parent scope, even after the parent function has closed. 
//They help us mimic the behavior of access modifiers through scoping. Let’s show this via an example:
// we  used an immediately invoked function expression(IIFE)
// to create a private variable, counter

// var counterIncrementer = (function () {
//     var counter = 0;

//     return function () {
//         return ++counter;
//     };
// })();

// // prints out 1
// console.log(counterIncrementer());
// // prints out 2
// console.log(counterIncrementer());
// // prints out 3
// console.log(counterIncrementer());

// // through the use of a closure we expose an object
// // as a public API which manages the private objects array
// var collection = (function () {
//     // private members
//     var objects = [];

//     // public members
//     return {
//         addObject: function (object) {
//             objects.push(object);
//         },
//         removeObject: function (object) {
//             var index = objects.indexOf(object);
//             if (index >= 0) {
//                 objects.splice(index, 1);
//             }
//         },
//         getObjects: function () {
//             return JSON.parse(JSON.stringify(objects));
//         }
//     };
// })();

// collection.addObject("Bob");
// collection.addObject("Alice");
// collection.addObject("Franck");
// // prints ["Bob", "Alice", "Franck"]
// console.log(collection.getObjects());
// collection.removeObject("Alice");
// // prints ["Bob", "Franck"]
// console.log(collection.getObjects());
// /*********************************************************************************** */

var singleton = (function () {
    // private singleton value which gets initialized only once
    var config;

    function initializeConfiguration(values) {
        this.randomNumber = Math.random();
        values = values || {};
        this.number = values.number || 5;
        this.size = values.size || 10;
    }

    // we export the centralized method for retrieving the singleton value
    return {
        getConfig: function (values) {
            // we initialize the singleton value only once
            if (config === undefined) {
                config = new initializeConfiguration(values);
            }

            // and return the same config value wherever it is asked for
            return config;
        }
    };
})();

var configObject = singleton.getConfig({ "size": 6 });
// prints number: 5, size: 8, randomNumber: someRandomDecimalValue
console.log(configObject);
var configObject1 = singleton.getConfig({ "number": 8 });
// prints number: 5, size: 8, randomNumber: same randomDecimalValue as in first config
console.log(configObject1);
// /***************************************************************************** */

// Notice how the two counters maintain their independence from one another. 
// Each closure references a different version of the privateCounter variable through its own closure. 
// Each time one of the counters is called, its lexical environment changes by changing the value of this variable. 
// Changes to the variable value in one closure don't affect the value in the other closure.

// var makeCounter = function () {
//     var privateCounter = 0;
//     function changeBy(val) {
//         privateCounter += val;
//     }
//     return {
//         increment: function () {
//             changeBy(1);
//         },

//         decrement: function () {
//             changeBy(-1);
//         },

//         value: function () {
//             return privateCounter;
//         }
//     }
// };

// var counter1 = makeCounter();
// var counter2 = makeCounter();

// console.log(counter1.value());  // 0.

// counter1.increment();
// counter1.increment();
// console.log(counter1.value()); // 2.

// counter1.decrement();
// console.log(counter1.value()); // 1.
// console.log(counter2.value()); // 0.

/******************************************************************************* */

// const car = {
//     name: "Toyota Camry",
//     drive() {
//         console.log("I'm driving!");
//     },
//     honk() {
//         console.log("Horn is making sound!");
//     }
// };
// const myCar = Object.create(car);
// myCar.drive()
// console.log(myCar.name);

// /************************************************************************* */

function Subject() {
    this.observer = [];
}
Subject.prototype = {
    subscribe: function (fn) {
        this.observer.push(fn);
    },
    emit: function (msg) {
        this.observer.forEach(function (fn) {
            fn.call(null, msg);
        });
    }
}
const subject = new Subject();
subject.subscribe(console.log);
subject.emit('Hello');
subject.emit('World');

/***************************************************************************** */

// function Mahler(options) {
//     this.clef = options.clef || "treble";
//     this.signature = options.signature || "4-flat";
//     this.tempo = options.tempo || 75;
// }
// function Bruckner(options) {
//     this.clef = options.clef || "bass";
//     this.tone = options.tone || "aria";
// }
// const createMelody = function (options) {
//     switch (options.clef) {
//         case "treble": return new Mahler(options);
//         case "bass": return new Bruckner(options);
//     }
// };
// const melody = createMelody({
//     clef: "treble",
//     signature: "1-flat",
//     tempo: 102
// });

// console.log(createMelody(melody));
// console.log(melody);

/*********************************************************************** */

function Factory() {
    this.createEmployee = function (type) {
        var employee;

        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        } else if (type === "temporary") {
            employee = new Temporary();
        } else if (type === "contractor") {
            employee = new Contractor();
        }

        employee.type = type;

        employee.say = function () {
            log.add(this.type + ": rate " + this.hourly + "/hour");
        }
        console.log(employee);
        return employee;
    }
}

var FullTime = function () {
    this.hourly = "$12";
};

var PartTime = function () {
    this.hourly = "$11";
};

var Temporary = function () {
    this.hourly = "$10";
};

var Contractor = function () {
    this.hourly = "$15";
};

// log helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();

function run() {
    var employees = [];
    var factory = new Factory();

    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("temporary"));
    employees.push(factory.createEmployee("contractor"));

    for (var i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }

    log.show();
}
run();
/**************************************************************** */

// Memoization

// const dummyLookup = {};
// function dummy(a, b, c) {
//     const key = `${a}-${b}-${c}`;// a + "" + b + "" + c;
//     if (key in dummyLookup) {
//         return dummyLookup[key];
//     }

//     const result = a + b + c;
//     dummyLookup[key] = result;
//     return result;
// }

// console.log(dummy(2, 3, 5));

/******************************************************************** */

// const add = (n) => (n + 10);

// // a simple memoize function that takes in a function
// // and returns a memoized function
// const memoize = (fn) => {
//     let cache = {};
//     return (...args) => {
//         let n = args[0];  // just taking one argument here
//         if (n in cache) {
//             console.log('Fetching from cache');
//             return cache[n];
//         }
//         else {
//             console.log('Calculating result');
//             let result = fn(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// }
// // creating a memoized function for the 'add' pure function
// const memoizedAdd = memoize(add);
// console.log(memoizedAdd(3));  // calculated
// console.log(memoizedAdd(3));  // cached
// console.log(memoizedAdd(4));  // calculated
// console.log(memoizedAdd(4));  // cached

/***************************************************************** */

function Mahler(options) {
    this.clef = options.clef || "treble";
    this.signature = options.signature || "4-flat";
    this.tempo = options.tempo || 75;
}
function Bruckner(options) {
    this.clef = options.clef || "bass";
    this.tone = options.tone || "aria";
}
const createMelody = function (options) {
    switch (options.clef) {
        case "treble": return new Mahler(options);
        case "bass": return new Bruckner(options);
    }
};
const melody = createMelody({
    clef: "treble"
});
console.log(melody);

/************************************************************* */

