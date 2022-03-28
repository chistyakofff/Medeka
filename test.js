// function curry(func) {

//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         }
//         else {
//             return function pass(...args2) {
//                 return curried.apply(this, args.concat(args2));
//             }
//         }
//     };
// }

// function sum(a, b, c) {
//     return a + b + c;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3));
// console.log(curriedSum(1)(2)(3));
// console.log(curriedSum(1)(2, 3));


// let users = [1, 2, 3];

// users.some = { a: 2 };

// users.other = { b: 5 };

// console.log(users);


// console.log(users.indexOf(some));


// for (let key in users) {
//     console.log(key);
// }
/*  */


 const arr = [1, 2, 3, 4, 5];

 let result = 0;

 arr.forEach(item => {
     result += item * item + 100;
 });

 console.log(result);

 const arr = [1, 2, 3, 4, 5];

 const result = arr.reduce((result, item) => result + (item * item + 100));

console.log(result);
console.log(arr);