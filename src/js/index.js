// import {sum, calculator as calc2} from './helper.js';


// let calculator = {
//     div: function (a, b) {
//         return a / b;
//     }
// }

// let x = 10;

// let y = 15;

// let res = sum(x, y);

// console.log(res);

// let res2 = calc2.mul(x, y);

// console.log(res2);


var a = 10;

function f() {
    console.log(a);
    var a = 5;
    console.log(a);
};
f();