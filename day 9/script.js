// Array.push is a method in JavaScript that allows you to add one or more elements to the end of an array.It modifies the original array and returns the new length of the array.
// Example usage:

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// Adding a single element to the end of the array
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// array.pop is a method in JavaScript that removes the last element from an array and returns that element. It modifies the original array and reduces its length by one.
// Example usage:

let vegetables = ['carrot', 'broccoli', 'spinach'];
console.log(vegetables); // Output: ['carrot', 'broccoli', 'spinach']

// Removing the last element from the array
let removedVegetable = vegetables.pop();
console.log(removedVegetable); // Output: 'spinach'
console.log(vegetables); // Output: ['carrot', 'broccoli']

//array.shift is a method in JavaScript that removes the first element from an array and returns that element. It modifies the original array and reduces its length by one.
// Example usage:

let colors = ['red', 'green', 'blue'];
console.log(colors); // Output: ['red', 'green', 'blue']

// Removing the first element from the array
let removedColor = colors.shift();
console.log(removedColor); // Output: 'red'
console.log(colors); // Output: ['green', 'blue']

// array.unshift is a method in JavaScript that adds one or more elements to the beginning of an array. It modifies the original array and returns the new length of the array.
// Example usage:

let animals = ['cat', 'dog', 'rabbit'];
console.log(animals); // Output: ['cat', 'dog', 'rabbit']
// Adding a single element to the beginning of the array
animals.unshift('hamster');
console.log(animals); // Output: ['hamster', 'cat', 'dog', 'rabbit']

// array.splice is a method in JavaScript that allows you to add or remove elements from an array at a specific index. It modifies the original array and returns an array containing the removed elements (if any).
// Example usage:

let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
// Removing elements from the array
let removedNumbers = numbers.splice(2, 2);
console.log(removedNumbers); // Output: [3, 4]
console.log(numbers); // Output: [1, 2, 5]

// Adding elements to the array
numbers.splice(2, 0, 6, 7);
console.log(numbers); // Output: [1, 2, 6, 7, 5]

// array.slice is a method in JavaScript that returns a shallow copy of a portion of an array into a new array object. It does not modify the original array.
// Example usage:

let letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters); // Output: ['a', 'b', 'c', 'd', 'e']
// Creating a new array with a portion of the original array
let slicedLetters = letters.slice(1, 4);
console.log(slicedLetters);
// Output: ['b', 'c', 'd']

// array.concat is a method in JavaScript that is used to merge two or more arrays. It does not modify the original arrays but returns a new array containing the elements of the merged arrays.
// Example usage:

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(array1); // Output: [1, 2, 3]
console.log(array2); // Output: [4, 5, 6]

// Merging the two arrays
let mergedArray = array1.concat(array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// array.join is a method in JavaScript that is used to join all elements of an array into a string. It takes an optional separator as an argument, which specifies the string to be used between each element. If no separator is provided, a comma (,) is used by default.
// Example usage:

let words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
console.log(words); // Output: ['Hello', 'world', 'this', 'is', 'JavaScript']

// Joining the elements of the array into a string with a space as the separator
let joinedString = words.join(' ');
console.log(joinedString); // Output: 'Hello world this is JavaScript'

// array.reverse is a method in JavaScript that reverses the order of the elements in an array. It modifies the original array and returns a reference to the same array.
// Example usage:

let numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray); // Output: [1, 2, 3, 4, 5]

// Reversing the order of the elements in the array
numbersArray.reverse(); 
console.log(numbersArray); // Output: [5, 4, 3, 2, 1]

// array.sort is a method in JavaScript that sorts the elements of an array in place and returns the sorted array. By default, it sorts the elements as strings in ascending order. You can also provide a compare function to define a custom sort order.
// Example usage:

let unsortedArray = [5, 2, 9, 1, 5, 6];
console.log(unsortedArray); // Output: [5, 2, 9, 1, 5, 6]

// Sorting the array in ascending order
unsortedArray.sort((a, b) => a - b);
console.log(unsortedArray); // Output: [1, 2, 5, 5, 6, 9]

// array.filter is a method in JavaScript that creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
// Example usage:

let numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbersFilter); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Creating a new array with only the even numbers
let evenNumbers = numbersFilter.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// array.map is a method in JavaScript that creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array.
// Example usage:

let numbersMap = [1, 2, 3, 4, 5];
console.log(numbersMap); // Output: [1, 2, 3, 4, 5] 

// Creating a new array with each element squared
let squaredNumbers = numbersMap.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// array.reduce is a method in JavaScript that executes a reducer function on each element of the array, resulting in a single output value. It does not modify the original array.
// Example usage:

let numbersReduce = [1, 2, 3, 4, 5];
console.log(numbersReduce); // Output: [1, 2, 3, 4, 5]
// Calculating the sum of all elements in the array
let sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// array.find is a method in JavaScript that returns the value of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns undefined. It does not modify the original array.
// Example usage:

let numbersFind = [1, 2, 3, 4, 5];
console.log(numbersFind); // Output: [1, 2, 3, 4, 5]

// Finding the first element greater than 3
let foundNumber = numbersFind.find((num) => num > 3);
console.log(foundNumber); // Output: 4

// array.includes is a method in JavaScript that determines whether an array includes a certain value among its entries, returning true or false as appropriate. It does not modify the original array.
// Example usage:

