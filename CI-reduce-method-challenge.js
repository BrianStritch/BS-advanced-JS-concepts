/**
 * node CI-reduce-method-challenge.js
 */

/**
 * Steps
You will use the reduce method to execute a function on each item resulting in a single object. The object should be that of the student with the highest english score and should show the student's name and english score. 
You can either create the arrow function within the reduce method. or create an arrow function outside and pass it into the reduce method.
Keep an eye open for spots to use destructuring, You will not be tested to see if you have done this, but it would be good for getting in more practice.
Create a variable named biggest using the keyword const
Assign it a value from using the reduce method on the students array
Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method
Use a default value with the reduce method
log out the variable biggest to see the value
 */

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

//   Create a variable named biggest using the keyword const
//   Assign it a value from using the reduce method on the students array
//   Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method
//   Use a default value with the reduce method
//   log out the variable biggest to see the value
  /**
   * code below given by another student
   */

const biggest = students.reduce((acc, curr) => {
    let grade = curr.results.english;
    if(grade > acc.max){
        acc.name = curr.name;
        acc.max = grade;
    }return acc;
}, {name: 'placeholder', max: 0});
console.log('Students answer found on slack',biggest);


// example of max accumulator below 

const numbers = [ 1 , 2 , 3 , 4 , 8 , 5 ,6]

const maxNum = numbers.reduce((max,num) =>{
    if(num > max){
        max = num;
    }return max
},0)

console.log('maxNum =',maxNum)

/**
 * example below gives you the value of the person object with the highest age
 */

const people = [
    {name: 'j', age : 8},
    {name: 'p', age : 22},
    {name: 'q', age : 12},
    {name: 'r', age : 20},   
]

const maxName = people.reduce((maxAge,person) =>{
    let age = person.age
    if (age > maxAge.age){        
        maxAge.age = age
        maxAge.name = person.name
    }return maxAge;
},{name: '', age:0});
console.log('maxAge =',maxName)

/**
 * example below gives you the value of the person object with the lowest age, 
 * i set the initial age value to 1000 as it would be higher than any expected age
 */

 const peopleMin = [
    {name: 'j', age : 8},
    {name: 'p', age : 22},
    {name: 'q', age : 12},
    {name: 'r', age : 20},   
]

const minName = peopleMin.reduce((minAge,person) =>{
    let age = person.age
    if (age < minAge.age){        
        minAge.age = age
        minAge.name = person.name
    }return minAge;
},{name: '', age:1000});
console.log('minAge = ',minName)



/**
 * THIS IS HOW THE CI-REDUCE-METHOD-CHALLENGE WORKS BELOW
 */
const highestEnglishScore = students.reduce((highestScore,student) =>{
    let score = student.results.english // to establish the value of the individual students english score
    //console.log('score =',score) // logs the value of score to the console for me to see
    if(score > highestScore.max){ //checks if the current english maths result is higher than the max value so far
        highestScore.max = score;  // sets the max: value of the initial value  to be returned
        highestScore.name = student.name // sets the name: value to be returned
    }return highestScore //returns the accumulator named highestScore
},{name:'', max:0})  // initial value set to the skeleton of the object we want returned

console.log('highestEnglishScore', highestEnglishScore)  // logs the returned value of highestEnglishScore to the console

/**
 * THIS returns the lowest score in english
 */
 const lowestEnglishScore = students.reduce((lowestScore,student) =>{
    let score = student.results.english // to establish the value of the individual students english score
    //console.log('score =',score) // logs the value of score to the console for me to see
    if(score < lowestScore.result){ //checks if the current english maths result is lower than the min value so far
        lowestScore.result = score;  // sets the min: value of the initial value  to be returned
        lowestScore.name = student.name // sets the name: value to be returned
    }return lowestScore //returns the accumulator named lowestScore
},{name:'', result:100})  // initial value set to the skeleton of the object we want returned

console.log('lowestEnglishScore', lowestEnglishScore)  // logs the returned value of lowestEnglishScore to the console






