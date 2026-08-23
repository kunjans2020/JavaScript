// wap to print array elements using for loop

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// wap to print array in reverse order using for loop

let arr2 = [1, 2, 3, 4, 5]; 
for (let i = arr2.length - 1; i >= 0; i--) {
    console.log(arr2[i]);
}

// wap to print even numbers from an array using for loop

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        console.log(arr3[i]);
    }
}

// wap to find sum of all elements in an array 

let arr4 =[11, 22, 33, 44, 55];
let sum=0;
for(let i=0; i<arr4.length; i++){
    sum+=arr4[i];
}

console.log("Sum of all elements in the array is: " + sum);

// wap to find maximum value from the array. 