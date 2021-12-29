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

// const highscore = students.reduce((acc,curr) => {
//     if(curr.results.english >= acc){
//             acc = curr.results.english;
//         }return acc;
//     },0);


/**
 * this one is the closest and the one below 0000000000000000000000000000000000000000000000
 */

const biggest = students.reduce((acc,curr) => {
    let key = curr.name;
    if (!acc[key]){
      acc[key] = curr.results
    } else {
      acc[key] = [acc[key],curr.name]
    };    
    const tot = students.reduce((acc, sub) => acc = acc > sub.results.english? acc : sub.results.english,0);
    for(s in students){
        if(students[s].results.english == tot){
            win = {}
            win.name = students[s].name;
            win.max = tot;
            return win
        }
    }
  },{});

//   const biggest = students.reduce((acc,curr) => {
//     
//     let key = curr.name;
//     if (!acc[key]){
//               acc[key] = curr.results
//             } else {
//               acc[key] = [acc[key],curr.name]
//             };   {
//         // if (curr.results.english == tot){
//         //   return `Name : '${curr.name}', Max: ${curr.results.english}`;  
//         // }
//       }},{});

console.log(biggest);