/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    //code block which executes when the function is called
    return a + b;
}

let sum = addTwoNumbers(3,5);
console.log(sum);

/********************************************** *************************************************** */

// Arrow Function With Parameters
// how to convert the vanilla JS function to ES6 arrow function
/**1. replace function with const keyword
 * 2. then put = sign between the name of function and parentheses
 * 3. then use ES6 fat arrow => between parentheses and the curly braces
 *  the rest of the function remains the same as before
 * slight change made to function and variable names to run both types in same program
 */
const addBothNumbers = (a, b) => {
    //code block which executes when the function is called
    return a + b;
}

let sums = addBothNumbers(3,3);
console.log(sums);

/********************************************** *************************************************** */

// Single Line Arrow Function With Parameters
/** to convert to single line arrow fnction you:
 * 1. remove the curly braces
 * 2. for simple functions with a single return value
 * you can just put what you want to return after the fat arrow.
 * const addBothNumbers2 = (a, b) => (a + b); you can also 
 *        put brackets around the return if you want
 */

const addBothNumbers2 = (a, b) => a + b;

let sums2 = addBothNumbers2(3,2);
console.log(sums2);

/********************************************** *************************************************** */

// Implicit Returns
/** if you have a function that you only have one return value 
 *  you can write it without the initial parentheses and if you
 *  want more than one you just wrap them in a parentheses.
 */
const saySomething = message => console.log(message);

saySomething('hello world')

/**
 * you can use the above for a function which takes no 
 * parameters but you must use empty parentheses to let 
 * JS know youre declaring a function
 */
const sayHello = () => console.log('hello')
sayHello()

/********************************************** *************************************************** */

// Returning Multiple Lines
/**
 * When using the following statement you must 
 * wrap the multi line comments in parenteses 
 * and use the backticks
 * 
 */
const returnMultipleLines = () => (
    `<p>
    this is a 
    multi line 
    statement
</p>`
)

console.log(returnMultipleLines())
