"use strict";
/*eslint-disable*/

var bar = Observable.create(function (observer) {
    observer.next('Hello');
    setTimeout(function () {
        observer.next('world');
    }, 1000);
});
console.log('before');
bar.subscribe(function (x) { console.log(x); });
console.log('after');