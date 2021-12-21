/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
// this method does not use destructuring, you have to declare each seperately
let ages = [30, 26, 27];
let john = ages[0];
let mary = ages[1];
let joe = ages[2];
console.log('johns age is:', john);
console.log('marys age is:', mary);
console.log('joe age is:', joe);
// this method is using destructuring:
let ages2 = [31,32,35]
let [jim,dave,pat] = ages2
console.log(jim,dave,pat)

/* **********************************************************************************/
// Destructuring objects
let jobs = {
    mike : 'designer',
    jill : 'developer',
    alicia : 'accountant'
};

let {mike, jill, alicia} = jobs;

console.log(mike,jill,alicia);

/* **********************************************************************************/
// Destructuring subsets

let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
// first two values are assigned and the rest of the array is ignored
console.log(johnNative, johnSecondary)

let [, , maryNative, marySecondary] = languages;
// by placing the commas in front of maryNative it skips the spaces where the commas are, ie: 1 comma skips 1 and so on
console.log(maryNative, marySecondary);

let languages2 = {
    language1 : 'english',
    language2 : 'french',
    language3 : 'spanish',
    language4 : 'german'
};

let {language1,language3} = languages2;
console.log(language1,language3);

/* **********************************************************************************/
// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian : 'pizza',
    anna : 'pasta',
    sarah : 'vegetarian',
    andrea : 'steak',
};

let {brian,anna,...rest} = favouriteFoods
console.log(brian);
console.log(anna);
console.log(rest);