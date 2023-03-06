/*
QUESTION 1
What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

ANSWER
Mutating array methods change the original array and return a reference to the same modified array.
Non-mutation array methods do not modify the original array and instead return a new array.

Here are 5 examples of each type of method:

Mutating Array Methods:

push(): Adds one or more elements to the end of an array and returns the new length of the array.
pop(): Removes the last element from an array and returns that element.
splice(): Adds or removes elements from an array and returns an array containing the removed elements (if any).
shift(): Removes the first element from an array and returns that element.
sort(): Sorts the elements of an array in place and returns the sorted array.
Non-Mutating Array Methods:

concat(): Merges two or more arrays and returns a new array without modifying the original arrays.
slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
filter(): Creates a new array with all elements that pass the test implemented by the provided function.
map(): Creates a new array with the results of calling a provided function on every element in the calling array.
reduce(): Executes a reducer function on each element of the array, resulting in a single output value. It doesn't modify the original array.
*/

/* QUESTION 2
Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
Add ‘Kotlin’ to the end of the array
Add ‘Java’ after ‘Ruby’
Remove the first item in the array
Add ’Scala’ and ‘Swift’ to the beginning of the array
Replace ‘PHP’ with ‘Go’ and ‘Rust’*/

// Original array
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
let index = languages.indexOf('Ruby');
languages.splice(index + 1, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
let phpIndex = languages.indexOf('PHP');
languages.splice(phpIndex, 1, 'Go', 'Rust');
// After performing the above operations, the languages array will contain the following elements in the given order:
console.log(languages); // ['Scala', 'Swift', 'C#', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']
//The splice() method is used to insert or remove elements from an array at a specified index. In this case, we use it to add 'Java' after 'Ruby' and replace 'PHP' with 'Go' and 'Rust'. The shift() method is used to remove the first element from the array. The push() and unshift() methods are used to add elements to the end and beginning of the array respectively.

/*QUESTION 3
What will be the value of fruit after calling the
function changeFruit?*/
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
    fruit[2] = "orange";
    return fruit;
};
// The value of fruit after calling the changeFruit function will be ['apple', 'mango', 'orange'].

// This is because the function takes an array fruit as a parameter, and then modifies the third element (at index 2) of the array to be "orange" using the assignment operator. The modified array is then returned from the function.

// Since arrays in JavaScript are passed by reference, when we pass the fruit array to the function, the function receives a reference to the original array, and any changes made to the array inside the function affect the original array as well. Therefore, when we call the function changeFruit(fruit), it modifies the original fruit array and changes the third element to "orange".

/*QUESTION 4
Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10
 */
function max(numbers) {
    let maxNumber = numbers[0]; // Initialize the max number as the first element of the numbers
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]; // Update the max number if a larger number is found
      }
    }
    return maxNumber;
  }
// The function works by iterating over each element in the array using a for loop. We initialize the maxValue variable to be the first element of the array, and then compare each subsequent element to this value. If an element is found that is greater than the current maxValue, we update maxValue to be that element instead.

// Once we've iterated over all the elements in the array, we return the final value of maxValue, which should be the maximum value in the array.
max([4, 5, 10, -2]); // returns 10

/* QUESTION 5
Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
e.g.,
 valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([5,10,15]) // [0,10,30]
*/
function valTimesIndex(arr) {
    return arr.map((val, index) => val * index);
  }
// The function uses the map method on the input array arr to create a new array with the same number of elements. For each element in the input array, we multiply it by its index using an arrow function, and return the resulting value as the corresponding element in the new array.

// Example:
valTimesIndex([1, 2, 3]); // returns [0, 2, 6]
valTimesIndex([5, 10, 15]); // returns [0, 10, 30]

// In the first example, the output is [0, 2, 6] because the input array [1, 2, 3] is multiplied by its corresponding indices [0, 1, 2], resulting in [0, 2, 6]. Similarly, in the second example, the input array [5, 10, 15] is multiplied by its corresponding indices [0, 1, 2], resulting in [0, 10, 30].
  