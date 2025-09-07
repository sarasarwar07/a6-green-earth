

---
#### 7) Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?
Answer:
var
1.var can be declare in function or globally outside the function
2.its value can be changed after declaration
3.we can use new variable with same name
4.generally we don't use var in js

let
1.let is limited to the block
2.its value can be changed after declaration
3.we can not use new variable with same name
4.generally we use let in loop

const
1. const is blocked scoped
2. its value can not be changed after declaration
3. we can not change its value
4. generally we use const whose values are intended to be constant



#### 2) What is the difference between map(), forEach(), and filter()? 
Answer:
map()
1. we use map() where we need to transform the element in the array and create a new array for the result
2.it returns the result of the callback function

forEach()
1. we use forEach() for run a function for each element in the array
2.it doesn't return any value

filter()
1. we use filter() to the elements that satisfy a specified condition
2.it returns a new array containing only the elements for which the callback function returns true.

#### 3) What are arrow functions in ES6?
Answer:
1.dont need to use function keyword. Instead, they use the (=>) operator to separate the parameters from the body. They inherit this from their surrounding scope. Arrow functions don’t have their own arguments object.


#### 4) How does destructuring assignment work in ES6?
Answer: Destructuring assignment in ES6 is a JavaScript expression that allows for unpacking values from arrays or properties from objects into distinct variables. The syntax involves using square brackets [] on the left-hand side of the assignment operator, mirroring the structure of the array being destructured.

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Answer: It is flexible to use and easy to work with strings compared to traditional string concatenation. in ES6 we use string enclosed by backticks (``) instead of single or double quotes. Don't need to use (\n) for multiple string. We can insert variables and expressions using ${...}. For example: 
const a = 10;
const b = 20;

console.log(`The sum is ${a + b}`);

