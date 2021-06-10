"use strict";
/*eslint-disable*/

//2) Write an implementation for the Observer Pattern where observers have the following
//    format: {'event': [observers]}

const Subject = function () {
    this.observers = [];
    this.observer = {
        eat: [],
        study: []
    }

}
Subject.prototype = {

    on: function (topic, fn) {
        if (!this.observer[topic]) {
            this.observer[topic] = [];
        }
        this.observer[topic].push(fn);
        this.observers.push(fn);
    },
    emit: function (topic) {
        this.observer[topic].forEach(function (fn) {
            fn.call();
        })
    },
    event: function () {
        return this.observers;
    },
    unsubscribe: function (event, fn) {
        if (this.observer[event]) {
            this.observer[event] = this.observer[event].filter((f) => f !== fn);
        }
    }

};

const Observer = function (obs) {
    this.observer = obs;
}

// class Subject {
//     constructor() {
//         this.observers = [];
//         this.observer = {
//             eat: [],
//             study: []
//         }
//     }
//     on (topic, fn) {
//         if (!this.observer[topic]) {
//             this.observer[topic] = [];
//         }
//         this.observer[topic].push(fn);
//         this.observers.push(fn);
//     }
//     emit (topic) {
//         this.observer[topic].forEach(function (fn) {
//             fn.call();
//         })
//     }
//     event () {
//         return this.observers;
//     }
//     unsubscribe (event, fn) {
//         if (this.observer[event]) {
//             this.observer[event] = this.observer[event].filter((f) => f !== fn);
//         }
//     }
// }

let subject = new Subject();

// let obs1 = new Observer("fn1");
// let obs2 = new Observer("fn2");

subject.on('eat', function1);
subject.on('eat', function2);
subject.on('study', function3);
subject.on('study', function4);
subject.on('study', function5);

subject.emit('eat');
console.log('-----------------')
subject.unsubscribe("eat", function2);
subject.emit('eat');

console.log(subject.event());

function function1() {
    console.log("Obsever1")
}
function function2() {
    console.log("Obsever2")
}
function function3() {
    console.log("Obsever3")
}
function function4() {
    console.log("Obsever4")
}
function function5() {
    console.log("Obsever5")
}