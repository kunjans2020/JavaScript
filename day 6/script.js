// wap to find the sum of digits of a number

let n = 12345;
let sum = 0;

for(n; n > 0; n = Math.floor(n / 10)) {
    let digit = n % 10;
    sum = sum + digit;
}
document.write("Question 1 Answer: ");
document.write("<br>The sum of the digits is: " + sum);

// wap to find sum of first and last digit of a number

let num = 1203;
let temp = num;
let lastDigit = num % 10;

while (temp >= 10) {
    temp = Math.floor(temp / 10);
}

let firstDigit = temp;
let s = firstDigit + lastDigit;

document.write("<br><br>Question 2 Answer: ");
document.write("<br>First digit = " + firstDigit);
document.write("<br>Last digit = " + lastDigit);
document.write("<br>Sum = " + s);

// wap to check if a number is a magic number or not

let number = 19;
let sumOfDigits = 0;

while (number > 0 || sumOfDigits > 9) {
    if (number === 0) {
        number = sumOfDigits;
        sumOfDigits = 0;
    }

    sumOfDigits += number % 10;
    number = Math.floor(number / 10);
}   

if (sumOfDigits === 1) {
    document.write("<br><br>Question 3 Answer: ");
    document.write("<br>" + number + " is a magic number.");
}

// wap to check if a number is a palindrome or not

let originalNum = 12321;
let reversedNum = 0;
let tempNum = originalNum;

while (tempNum > 0) {
    let digit = tempNum % 10;
    reversedNum = reversedNum * 10 + digit;
    tempNum = Math.floor(tempNum / 10);
}

if (originalNum === reversedNum) {
    document.write("<br><br>Question 4 Answer: ");
    document.write("<br>" + originalNum + " is a palindrome number.");
}

// find the sum of only even numbers from 1 to n

let limit = 10;
let evenSum = 0;

for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}
document.write("<br><br>Question 5 Answer: ");
document.write("<br>The sum of even numbers from 1 to " + limit + " is: " + evenSum);


