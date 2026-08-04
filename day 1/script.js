// Swap using third variable

let a = 20;
let b = 50;
let c;

console.log("Before swapping:")
console.log("a =", a);
console.log("b =", b);

c = a;
a = b;
b = c;

console.log("After swapping:")
console.log("a =", a);
console.log("b =", b);

// Swap without using third variable

let x = 50;
let y = 100;

console.log("Before swapping:")
console.log("x =", x);
console.log("y =", y);

x = x + y; // x now becomes 150
y = x - y; // y becomes 50
x = x - y; // x becomes 100 

console.log("After swapping:")
console.log("x =", x);
console.log("y =", y);