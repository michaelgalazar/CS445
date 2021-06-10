"use strict";
/*eslint-disable*/

Array.prototype.removeDuplicates = function () {
    let result = [];
    for( let i = 0; i < this.length; i++ ) {
        if (!result.includes(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

//console.log([4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates());

/**************************************************************** */

 let arr = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2];
// let uniqueArr = arr.filter((num, index) => {
// return arr.indexOf(num) === index;
// });
// console.log(uniqueArr);

function removeDuplicate(arr) {

    return new Promise((resolve) => {
        let uniqueArr = arr.filter((num, index) => {
            return arr.indexOf(num) === index;
            });
            resolve(uniqueArr);
    });
};

removeDuplicate(arr).then((data) => console.log(data));


/************************************************************* */

async function removeDuplicate(arr) {

    const result = await new Promise((resolve) => {
        let uniqueArr = arr.filter((num, index) => {
            return arr.indexOf(num) === index;
            });
            resolve(uniqueArr);
    });
    console.log(result);
};

removeDuplicate(arr);

