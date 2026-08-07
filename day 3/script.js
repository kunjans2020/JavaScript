//&& operator

let a = 10;
let b = 20;

console.log(a > 5 && b < 25); // true && true => true
//console.log(true && false);

let c = 30;
let d = 20;

console.log(c > 25 && d > 55); // true && true => true

//|| operator

let e = 10;
let f = 20;

console.log(e > 15 || f < 25); // false || true => true

//! operator

let g = 10;
let h = 20;

console.log(!(g > 5)); // !(true) => false

let k = 10;
console.log(a > 5 && a < 20);// true && true => true

let age = 17;
let hasID = true;

console.log(age >= 18 && hasID); // false && true => false
console.log(age >= 18 || hasID); // false || true => true

let m = true;
let n = false;
let o = true;

console.log(m && n || o);