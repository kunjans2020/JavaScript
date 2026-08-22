// Swap using third varaible using function

function swapUsingThirdVariable(a, b) {
    console.log("Before swapping:")
    console.log("a =", a);
    console.log("b =", b);

    let c = a;
    a = b;
    b = c;

    console.log("After swapping:")
    console.log("a =", a);
    console.log("b =", b);
}

// swap without using third variable using function

function swapwithoutusingthirdvariable(a, b) {
    console.log("Before swapping:")
    console.log("x =", x);
    console.log("y =", y);

    x = x + y; // x now becomes 150
    y = x - y; // y becomes 50
    x = x - y; // x becomes 100 

    console.log("After swapping:")
    console.log("x =", x);
    console.log("y =", y);
}

//Write a program to temperature conversion from Fahrenheit to Celsius and Celsius to Fahrenheit using function

// wap to convert meter in kilometer using function

function convertMetersToKm(meters) {
    return meters / 1000;

}

let metersInput = 2500;
let kilometersResult = convertMetersToKm(metersInput);

console.log(`${metersInput} meters is equal to ${kilometersResult} kilometers.`)

// wap to convert second to hh:mm:ss format using function

function convertSecondsToHMS(totalSeconds) {
    
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
}

console.log(convertSecondsToHMS(3665));

// wap to find area of cricle , rectengle , square and tringle using function

function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

// 2. Function to calculate the area of a Rectangle (Formula: length * width)
function areaOfRectangle(length, width) {
    return length * width;
}

// 3. Function to calculate the area of a Square (Formula: side * side)
function areaOfSquare(side) {
    return side * side;
}

// 4. Function to calculate the area of a Triangle (Formula: 0.5 * base * height)
function areaOfTriangle(base, height) {
    return 0.5 * base * height;
}

// Circle with radius = 5
let radius = 5;
console.log(`Area of Circle (r=${radius}): ` + areaOfCircle(radius).toFixed(2));

// Rectangle with length = 10, width = 5
let length = 10, width = 5;
console.log(`Area of Rectangle (${length}x${width}): ` + areaOfRectangle(length, width));

// Square with side = 4
let side = 4;
console.log(`Area of Square (side=${side}): ` + areaOfSquare(side));

// Triangle with base = 6, height = 8
let base = 6, height = 8;
console.log(`Area of Triangle (b=${base}, h=${height}): ` + areaOfTriangle(base, height));

//wap to find sum of n using function 

function findSum(n) {
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
        sum += i; // Adds the current number to the sum
    }
    
    return sum;
}

const n = 5;
const result = findSum(n);
console.log(`The sum of first ${n} numbers is: ${result}`);

// wap to use all realtional operators by different comparation: using function

//&& operator using function

function checkEligibility(age, hasId) {
  // Both conditions must be true
  if (age >= 18 && hasId === true) {
    return "Access granted.";
  } else {
    return "Access denied.";
  }
}

console.log(checkEligibility(20, true));

//|| operator using function

function greetUser(name) {
  // If 'name' is missing (falsy), it falls back to 'Guest'
  const userName = name || 'Guest';
  console.log(`Welcome back, ${userName}!`);
}

greetUser('Alice'); 
greetUser();

// ! operator using function

// wap to check whether a number is even or odd using function

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOrOdd(10)); 
console.log(checkEvenOrOdd(7));

// wap to check whether a number is positive, negative or zero using function

function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(15));  
console.log(checkNumber(-8));  
console.log(checkNumber(0));

// wap to check whether a user is eligible to vote or not using function 

// wap to check given number is divisible by 7 or not using function

function divisible(num){

    if (num % 7 === 0){
       return `${num} is divisible by 7.`;
    } else {
        return `${num} is not divisible by 7.`;
    }
}
console.log(divisible(14));
console.log(divisible(20));

// wap to print grade of a student based on marks obtained using function

function calculateGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid Marks! Please enter a value between 0 and 100.";
    }
    
    if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "F (Fail)";
    }
}

let student1Marks = 95;
let student2Marks = 73;
let student3Marks = 42;

console.log(`Marks: ${student1Marks} -> Grade: ${calculateGrade(student1Marks)}`);
console.log(`Marks: ${student2Marks} -> Grade: ${calculateGrade(student2Marks)}`);
console.log(`Marks: ${student3Marks} -> Grade: ${calculateGrade(student3Marks)}`);

// wap to check number is even or not using if else without using % using function

function isEvenWithoutModulo(num) {
    
    if ((num & 1) === 0) {
        return `${num} is even.`;
    } else {
        return `${num} is odd.`;
    }
}

console.log(isEvenWithoutModulo(10));
console.log(isEvenWithoutModulo(7));

//while loop using function

function printNumbersWhileLoop(start, end) {
    let current = start;
    while (current <= end) {
        console.log(current);
        current++;
    }
}

printNumbersWhileLoop(1, 5);

// do while loop using function

function printNumbersDoWhileLoop(start, end) {
    let current = start;
    do {
        console.log(current);
        current++;
    } while (current <= end);
}

printNumbersDoWhileLoop(1, 5);

// for loop using function

function printNumbersForLoop(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

printNumbersForLoop(1, 5);

// wap to print 10 to 1 using while loop and do while loop using function

function printDescendingWhileLoop(start, end) {
    let current = start;
    while (current >= end) {
        console.log(current);
        current--;
    }
}

printDescendingWhileLoop(10, 1);

function printDescendingDoWhileLoop(start, end) {
    let current = start;
    do {
        console.log(current);
        current--;
    }
    while (current >= end);
}

printDescendingDoWhileLoop(10, 1);

// wap to print only even numbers from 10 to 1 using function

function printEvenNumbersDescending(start, end) {
    let current = start;
    while (current >= end) {
        if (current % 2 === 0) {
            console.log(current);
        }
        current--;
    }
}

printEvenNumbersDescending(10, 1);

// wap to print leap years from 2000 to 3000 using function

function printLeapYears(startYear, endYear) {
    let year = startYear;
    while (year <= endYear) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            console.log(year);
        }
        year++;
    }
}

printLeapYears(2000, 3000);

// wap to print 1 to n using while loop and do while loop using function

function printNumbersToNWhileLoop(n) {
    let current = 1;
    while (current <= n) {
        console.log(current);
        current++;
    }
}

printNumbersToNWhileLoop(10);

function printNumbersToNDoWhileLoop(n) {
    let current = 1;
    do {
        console.log(current);
        current++;
    }
    while (current <= n);
}

printNumbersToNDoWhileLoop(10);

// wap to print only odd numbers from 1 to n using function

function printOddNumbersToN(n) {
    let current = 1;
    while (current <= n) {
        if (current % 2 !== 0) {
            console.log(current);
        }
        current++;
    }
}

printOddNumbersToN(10);

