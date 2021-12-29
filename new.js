/**
 * new.js
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



// function getBig(arr){ 
            
// }



// result = getBig(students);
// const biggest = students.reduce((acc,curr) => {
//     let results = 0    
//     for(a in arr){        
//         if(arr[a].results.english >= results){
//             results = arr[a].results.english;
//         }   
//     }return results;
// },0);
// console.log(biggest)

// const biggest = students.reduce((acc,curr) => {
//     if(curr.results.english >= acc){
//             acc = curr.results.english            
//         }return acc;},0);

// function studentWithScore(){
//     for(student in students){
//         for(result in results){
//             if (result.english == biggest){
//                 topStudent = `{ Name: ${student.name}, Max: ${result.english}}`
//                 return topStudent
//             }
//         }
//     }
// const p = studentWithScore() 
// console.log(p)

const highscore5 = students.reduce((acc,curr) => {
    if(curr.results.english >= acc){
            acc = curr.results.english;
        }return acc;
    },0);

// const biggest5 = students.reduce((acc,curr) => {
//     if(curr.results.english >= highscore5){
//         
//     }
//     return acc
//     },{});
// console.log(biggest5)

const biggest3 = students.reduce((acc,curr) => {
    let key = curr.results.english;
    if (key >= highscore5){
        acc = curr
    };return acc;}
    ,{})
console.log(biggest3)

// const biggest4 = students.reduce((acc,curr) => {
//     let key = curr.results.english;
//     if (key >= highscore5){
//         acc = curr
//     };return acc;}
//     ,{})

// const bigger = students.reduce(biggest4,0)
// console.log(bigger)
const topStudent ={};
topStudent.name = biggest3.name;
topStudent.max = highscore5;
console.log(topStudent)
