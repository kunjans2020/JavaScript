// wap to check whether a number is even or odd

let number = parseInt(9);

if (number % 2 === 0) {
    console.log(number + " is an even number.");
}
else {
    console.log(number + " is an odd number.");
}

// wap to check whether a number is positive, negative or zero

let num = parseInt(7);

if (num > 0) {
    console.log(num + " is a positive number.");
}
else if (num < 0) {
    console.log(num + " is a negative number.");
}
else {
    console.log(num + " is zero.");
}

// wap to check whether a user is eligible to vote or not

let age = parseInt(15);

if (age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}

// wap to check given number is divisible by 7 or not

let num1 = parseInt(16);

if (num1 % 7 === 0) {
    console.log(num1 + " is divisible by 7.");
}
else {
    console.log(num1 + " is not divisible by 7.");
}

// wap to print grade of a student based on marks obtained

let marks = parseInt(50);

if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 80) {
    console.log("Grade: B");
}
else if (marks >= 70) {
    console.log("Grade: C");
}
else if (marks >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

// wap to check number is even or not using if else without using %

let num2 = parseInt(9);

if (num2 / 2 === Math.floor(num2 / 2)) {
    console.log(num2 + " is an even number.");
}
else {
    console.log(num2 + " is an odd number.");
}
