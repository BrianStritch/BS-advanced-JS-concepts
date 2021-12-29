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



const highscore5 = students.reduce((acc,curr) => {
    if(curr.results.english >= acc){
            acc = curr.results.english;
        }return acc;
    },0);

const biggest5 = students.reduce((acc,curr) => {
    if(curr.results.english >= highscore5){
        acc = `Name : ${curr.name}, Max: ${curr.results.english}`
    }
    return acc
},{});
console.log(biggest5)
    
// console.log('biggest =', biggest)
// let key = curr.name;
//     let result
//     if (!acc[key]){
//         if(curr.results.english >= highscore)
//         acc[key] = curr.results.english 
//         result =      
//     }
//     return result;
//       },{});


const biggest2 = students.reduce((acc, sub) => acc = acc > sub.results.english? acc : sub.results.english,0);
console.log(biggest2)
const bestInEnglish = students.filter(student => student.results.english >= biggest2);
const highscore = bestInEnglish.map(student => {
    for(p in student) {    
      if (p == 'name' ) {      
        var name = ` ${student[p]}`
      }
        };
    for(g in student.results) {
      if (g == 'english') {      
          var max = `${student.results[g]}`
        }
          }; 
       
      return {name,max}
      });  
  console.log(highscore)

//   Create a variable named biggest using the keyword const
//   Assign it a value from using the reduce method on the students array
//   Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method
//   Use a default value with the reduce method
//   log out the variable biggest to see the value




// console.log(biggest)
























// const english = students.filter(student => student.subjects == 'english');
// console.log(english)


// let devs = english  // <----- change the job type here and the function below will give correct results

// const mostExperience = devs.reduce((acc, dev) => acc = acc > dev.results.english? acc : dev.results.english,);
// const hasBestExp = devs.filter(dev =>  dev.yrsExperience >= mostExperience);
// const mostExp = hasBestExp.map(dev => dev.name)
// const jobType = hasBestExp.map(dev => dev.profession)

// const studentsWithIds2 = students.map(student => {
//     for(p in student) {    
//       if (p == 'name' ) {      
//         var x = `${p}: ${student[p]}`
//       }
//         };
//     for(g in student) {
//       if (g == 'id') {      
//           var y = `${g}: ${student[g]}`
//         }
//           }; 
       
//       return [x,y]
//       })
  
//   console.log('students with ids 2 =', studentsWithIds2)

// const highScores = student => {
//     let strongSkills = student.results.filter(skill => skill.english >= 5);
//     return strongSkills.length > 0;
//   }
  
//   const candidates2 = students.filter( highScores);

//   console.log('hasStrongSkills :',candidates2);