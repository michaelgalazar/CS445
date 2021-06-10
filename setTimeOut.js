
"use strict";
/*eslint-disable*/

// function fn(callback) {
//     setTimeout(() => {
//     console.log('result of fn()');
//     callback();
//     }, 1000 ); // 1 second delay
//     }
//     fn(()=> console.log('fn() is done!'));

//     const p = new Promise();

// function fn (r, s){
//     let x = 0;

//     if (x == 0){
//         r("Ok");
//     }
//     else {
//         s("Error");
//     }   
// };

// function MyFunction (fn) {

//     this.s = function(params) {
//         thenAfter(params);
//     }
//     this.r = function (params) {
//         thenAfter(params);
//     }
//     this.thenAfter = function (params) {   
//         return params;
//     }
//     fn();
// }
/*********************************************************************************** */
// function thenA(params) {
//     params();
// }

// thenA(() => console.log("Hi"));

// const promise = new Promise((resolve, reject) => {
//     console.log(`Promise starts`)
//     resolve(`Promise result`)
//     resolve(`Promise result after second callback`)
//     console.log(`Promise ends`)
// })
// console.log(`Code starts`)
// promise.then(console.log)
// console.log(`Code ends`)

/************************************************************************************ */
setTimeout(() => console.log('setTimeout results'), 0);
const promise = new Promise((resolve) => resolve(`Promise results`));
console.log('Code starts');
promise.then(console.log);
console.log('I love JS');

/************************************************************************************* */

function n(p) {
    return function (q) {
        return function (r) {
            return p + q + r;
        }
    }
}

console.log(n(4)(5)(1));

/*************************************************************************************/
