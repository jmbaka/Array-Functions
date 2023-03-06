## Assignment
### Arrays & Functions

*For this assignment, create a folder and name it arrays-functions. Create an ‘index.js’ file and put all your answers in there. Separate your answers using comments. Push your work into a Github repository and submit the Github repository link in Citrone.*

1.  What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.
2.  Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
*   Add ‘Kotlin’ to the end of the array
*   Add ‘Java’ after ‘Ruby’
*   Remove the first item in the array
*   Add ’Scala’ and ‘Swift’ to the beginning of the array
*   Replace ‘PHP’ with ‘Go’ and ‘Rust’
3.  What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
4.  Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10

5.  Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
e.g.,
 valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([5,10,15]) // [0,10,30]
