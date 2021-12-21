/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */
//    node the-spread-operator.js

/*****************************************no spread operator */

// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1;
console.log('second array:', arr2);
arr2.push(4);
console.log('second array:', arr2);
console.log('first array:', arr1);

/***************************************** Copying an array */

// Copying an array
let arr3 = [4,5,6];
// to use the spread you use three dots like below
let arr4 = [...arr3];
console.log('arr4 = ' , arr4);
arr4.push(10)
console.log('array3, array4', arr3, arr4);

/***************************************** Copying an object */
// Copying an object
let obj1 = {a:1, b:2, c:3}
let obj2 = {...obj1}
console.log(obj1,obj2)
// you can add new properties to your object while using the spread as per below
let obj3 = {...obj1,...obj2,d:4}
console.log(obj1,obj2,obj3)
// how to override a value ie: b cahnged to 6 below
let obj4 = {...obj1, b:6}
console.log(obj4)

/***************************************** Copying only part of an object */
// Copying only part of an array/object
// you can copy or create an array or object using existing objects and arrays like below.
// you can also add in additional values as can be seen below.
let arr5 = [...arr1,{...obj3},...arr3,'y' , 'z']
console.log(arr5)