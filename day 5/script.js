//while loop

let i = 1;

while (i <=10) {
    console.log(i);
    i++;
}

// do while loop

let j = 1;

do {
    console.log(j);
    j++;
}while (j <= 10);

// wap to print 10 to 1 using while loop and do while loop

// while loop
let k = 10;

while (k >= 1) {
    console.log(k);
    k--;
}

// do while loop

let l = 10;

do {
    console.log(l);
    l--;
}while (l >= 1);

// wap to print only even numbers from 10 to 1

let m = 10;

while (m >= 1) {

    if (m % 2 === 0) {
        console.log(m);
    }
    m--;
}

// wap to print leap years from 2000 to 3000

let year = 2000;

while (year <= 3000) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
    }
    year++;
}

// wap to print 1 to n using while loop and do while loop

let n = 1;
let limit = 10; // You can change this limit to any number you want

// while loop
while (n <= limit) {
    console.log(n);
    n++;
}

// do while loop

let p = 1;
do {
    console.log(p);
    p++;
}while (p <= limit);

// wap to print only odd numbers from 1 to n 

let q = 1;
let oddLimit = 10; // You can change this limit to any number you want

while (q <= oddLimit) {
    if (q % 2 !== 0) {
        console.log(q);
    }
    q++;
}

