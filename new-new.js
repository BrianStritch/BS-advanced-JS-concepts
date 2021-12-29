/**
 * Steps
You will use the reduce method to execute a function on each item resulting in a single object. The object should be that of the student with the highest english score and should show the student's name and english score. 
You can either create the arrow function within the reduce method. or create an arrow function outside and pass it into the reduce method.
Keep an eye open for spots to use destructuring, You will not be tested to see if you have done this, but it would be good for getting in more practice.


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

//node new-new.js
// Create a variable named biggest using the keyword const

const bestResult = () => {
    let result = 0;
    for(s in students){
       if(students[s].results.english >= result){
           result = students[s].results.english
       };
    } return result
};


const biggest = students.reduce((acc,curr) => {
    let result = bestResult();
    let key = acc.name;
    if (!acc[key]){
        if(curr.results.english == result){
          acc.name = curr.name
          acc.max = curr.results.english  
        }        
    };return acc      
  },{});

console.log('biggest = ',biggest)






// Assign it a value from using the reduce method on the students array


// Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method


// Use a default value with the reduce method


// log out the variable biggest to see the value


//node new-new.js
// Create a variable named biggest using the keyword const

const bestResult2 = () => {
    let result = 0;
    for(s in students){
       if(students[s].results.english >= result){
           result = students[s].results.english
       };
    } return result
};


const biggest2 = students.reduce((acc,curr) => {
    let result = bestResult2();
    let key = acc.name;
    if (!acc[key]){
        if(curr.results.english == result){
          acc.name = curr.name
          acc.max = curr.results.english  
        }        
    };return acc      
  },{});

console.log('biggest2 = ',biggest2)

/**
 * biggest version 3
 */
const biggest3 = students.reduce((acc,curr) => {
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

  console.log('biggest3 =',biggest3)

/**
 * biggest version 4
 */
 const tot = students.reduce((acc, sub) => acc = acc > sub.results.english? acc : sub.results.english,0);
 function winner(){
    for(let s in students){
    if(students[s].results.english == tot){
        win = {};
        win.name = students[s].name;
        win.max = tot;
        return win;
    }
}
}
const biggest4 = students.reduce((acc,curr) => {
    let win = winner();
        let key = curr.name;
        if (!acc[key]){
                acc[key] = curr.results;
        }
                else {
                    acc[key] = [acc[key],curr.name];
            }return win;
            },0);
        console.log('biggest4 = ',biggest4);


/**
 * biggest version 5
 */

 const highscore5 = students.reduce((acc,curr) => {
    if(curr.results.english >= acc){
            acc = curr.results.english;
        }return acc;
    },0);

const biggest5 = students.reduce((acc,curr) => {
    let key = curr.results.english;
    if (key >= highscore5){
        acc = curr
    };return acc;}
    ,{})

const topStudent ={};
topStudent.name = biggest5.name;
topStudent.max = highscore5;
console.log('biggest5 = ',topStudent)


/**
 * biggest version 6
 */

 const highscore2 = students.reduce((acc, sub) => acc = acc > sub.results.english? acc : sub.results.english,0); 
 const bestInEnglish = students.filter(student => student.results.english >= highscore2);
 const biggest6 = bestInEnglish.map(student => {
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
   console.log('biggest6 =',biggest6)
 
/**
 * code below found on slack but not correct
 */
const biggest99 = students.reduce((max,person) =>{
    if(person.results.english > max){
        max = person.results.english;
    }return max;
},0);

bestStudent = students.filter(person => person.results.english == biggest99).map(person => ({name:person.name, max: person.results.english}))[0];

console.log('biggest99 = ', bestStudent);