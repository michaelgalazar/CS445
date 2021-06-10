"use strict";
/*eslint-disable*/

// export class Employee {
//     constructor() {   
//     }
//     // p = function() {
//     //        console.log("Hiiiii"); 
//     // }
//     t() {
//         console.log("Hello");
//     }
// }

// const p1 = new Employee();
// p1.p();
// p1.t();

/************************************************************ */

// const person = { firstName: "Asaad" };
// function sayHi() {
//     console.log(`Hi, my name is ${this.firstName}!`);
// }
// const greet = sayHi.bind(person);
// greet(); // "Hi, my name is Asaad!"
// greet.call({ firstName: "Mike" }); // "Hi, my name is Asaad!"

// const p = { firstName: "Mike" }
// sayHi.call(p);
// sayHi.call(person);

/********************************************************* */

function CustomerPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var customer = new Customer();

        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;

        return customer;
    };
}

function Customer(first, last, status) {

    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
            ", status: " + this.status);
    };
}

function run() {

    var proto = new Customer("Michael", "Alazar", "Student");
    var prototype = new CustomerPrototype(proto);

    var customer = prototype.clone();
    customer.say();
}

run();

/****************************************************************** */

const singleton = (function () {
    let instance;
    return {
        getInstance: function () {
            if (!instance) {
                instance = new Object("I am the instance");
            }
            return instance;
        }
    };
})();
const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();
console.log("Same instance? " + (instance1 === instance2)); // true

const Singleton = function () {
    let instance;
    return {
        getInstance: function () {
            if (!instance) {
                console.log(instance);
                instance = new Object("I am the instance");
            }
            return instance;
        }
    };
};
const instance3 = Singleton().getInstance();
const instance4 = Singleton().getInstance();
console.log("Same instance? " + (instance1 === instance2));// false