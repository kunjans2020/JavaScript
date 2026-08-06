//Write a program to temperature conversion from Fahrenheit to Celsius and Celsius to Fahrenheit

let fahrenheit = 100;
let celsius = (fahrenheit - 32) * 5 / 9;

console.log(fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C");

let celsiusTemp = 37;
let fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;

console.log(celsiusTemp + "°C is equal to " + fahrenheitTemp.toFixed(2) + "°F");

// Write a program to convert meter to kilometer:

let meters = 1500;
let kilometers = meters / 1000;

console.log(meters + " meters is equal to " + kilometers + " kilometers");

// wap to convert second to hh:mm:ss format:

let totalSeconds = 3656;
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;

console.log(hours + ":" + minutes + ":" + seconds);
// wap to find the area of circle, triangle ,rectangle and square:

let radius = 5;
let areaCircle = Math.PI * radius * radius; // A=pi r^2

console.log("Area of Circle with radius " + radius + " is: " + areaCircle.toFixed(2));

let base = 10;
let height = 5;
let areaTriangle = 0.5 * base * height; // A=1/2 * b * h

console.log("Area of Triangle with base " + base + " and height " + height + " is: " + areaTriangle.toFixed(2));

let length = 8;
let width = 4;
let areaRectangle = length * width; // A=l*w

console.log("Area of Rectangle with length " + length + " and width " + width + " is: " + areaRectangle.toFixed(2));

let side = 6;
let areaSquare = side * side; // A=s^2

console.log("Area of Square with side " + side + " is: " + areaSquare.toFixed(2));
// wap to find sum of n:

let n = 30;
let sum = (n * (n + 1)) / 2; // Sum of first n natural numbers

console.log("Sum of first " + n + " natural numbers is: " + sum);
// wap to use all realtional operators by different comparation:

let a = 10;
let b = 20;

console.log(a + " > " + b + " : " + (a > b));
console.log(a + " < " + b + " : " + (a < b));
console.log(a + " >= " + b + " : " + (a >= b));
console.log(a + " <= " + b + " : " + (a <= b));
console.log(a + " == " + b + " : " + (a == b));
console.log(a + " != " + b + " : " + (a != b));
