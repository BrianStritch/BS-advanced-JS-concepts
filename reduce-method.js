  
/**
 * To run this file in Gitpod, use the 
 * command node reduce-method.js in the terminal
 */


// Summing an array of numbers:
const nums = [0,1,2,3,4];
//you need to provide a callback function
// the typical parameters passed in are acc for accumulator and curr for current value
// The accumulator represents the value that will ultimately be returned from the reduce method.

let sum = nums.reduce((acc,curr) => acc + curr);
console.log(sum);

// to expand on the above funtion to examine whats happening within see below

let sums = nums.reduce((acc,curr) => {
  console.log(
    'accumulator: ',acc,
    'current value: ', curr,
    'total: ', acc + curr,
  )
  return acc + curr;
})

console.log(sums)
/**
 * returns:
 *  accumulator:  0 current value:  1 total:  1
    accumulator:  1 current value:  2 total:  3
    accumulator:  3 current value:  3 total:  6
    accumulator:  6 current value:  4 total:  10
    10


 */

/**********************************************************************
 * The reason the accumulator only ran 4 times even though there was 5 numbers, is that the reduce method  
 * actually takes a second parameter -   
    the initial value to use as the accumulator.If you don’t specify an initial value,  
    the accumulator will default to the first element  in the array. In this case that element was zero,  
    and the accumulation process starts with the second element in the array, so 1 is added to 0.

    If you explicitly set a value for the accumulator it will then include all elements in the array, 
    the acc is set after the function as can be seen below:
 */
let sums2 = nums.reduce((acc,curr) => {
  console.log(
    'accumulator: ',acc,
    'current value: ', curr,
    'total: ', acc + curr,
  )
  return acc + curr;
},10)

console.log('this sum has the acc value set to 10 and now includes all elements of the array - total:',sums2)

// simplified version of the functin with the acc set to Zero. ***** it is good practice to always set the acc value 
console.log()
let sum3 = nums.reduce((acc,curr) => acc + curr,0);
console.log('simplified function with acc set to zero',sum3);







const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
/**
 * To run this file in Gitpod, use the 
 * command node reduce-method.js in the terminal
 */

console.log('************************************************************************')
console.log()
  // Totaling a specific object property ** make sure to put acc and not teamMembers.yrsExperience or otherwise
let totalExperience = teamMembers.reduce((acc,curr) => acc + curr.yrsExperience, 0);
console.log('total years experience = ',totalExperience);

// Grouping by a property, and totaling it too
// the acc value is set to an empty object so it will return an object, it can be set to an int, arr, obj etc
// {developer: 12 , designer: 4 }  <-- this is what we want to end up with
const experienceByProfession = teamMembers.reduce((acc,curr) => {
  let key = curr.profession;
  if (!acc[key]){
    acc[key] = curr.yrsExperience
  } else {
    acc[key] += curr.yrsExperience
  };
  return acc;
},{});

console.log(experienceByProfession);





const teamMembers2 = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Jimmy',
    profession: 'Lawyer',
    yrsExperience: 6
  },
  {
    name: 'Johny',
    profession: 'Archaeologist',
    yrsExperience: 2
  },
  {
    name: 'Mary',
    profession: 'Lawyer',
    yrsExperience: 7
  },
  {
    name: 'Paddy',
    profession: 'Archaeologist',
    yrsExperience: 8
  }
];


console.log('************************************************************************')
console.log()
  // Totaling a specific object property ** make sure to put acc and not teamMembers.yrsExperience or otherwise
let totalExperience2 = teamMembers2.reduce((acc,curr) => acc + curr.yrsExperience, 0);
console.log('total years experience2 = ',totalExperience2);
/**
 * if you add in additional team members with different proffessions it will return the correct values
 */

const experienceByProfession2 = teamMembers2.reduce((acc,curr) => {
  let key = curr.profession;
  if (!acc[key]){
    acc[key] = curr.yrsExperience
  } else {
    acc[key] += curr.yrsExperience
  };
  return acc;
},{});

console.log(experienceByProfession2);

// ******************** challenge set by the teacher **************************************/
/**
 * As a final thought experiment,  
consider some of the other ways you could  manipulate this teamMembers array using reduce.  
Think about how you could restructure it into  an object similar to the one we just created,  
but instead of totaling the experience for each  profession, you instead provide an array of the  
names of those employees. What about if there  were 100 employees and 20 different professions,  
and you wanted to filter out only the ones in a specific profession and find the one with the most experience?
All of this could be done using combinations of map, filter and reduce.
 */
console.log('***************************************************************************************')
const namesByProfession = teamMembers2.reduce((acc,curr) => {
  let key = curr.profession;
  if (!acc[key]){
    acc[key] = curr.name
  } else {
    acc[key] = [acc[key],curr.name]
  };
  
  return acc;
},{});

console.log('Names by profession: ',namesByProfession);


// filter the profession for a single job type and find the one with the most experience:

const developers = teamMembers2.filter(student => student.profession == 'Developer');
const designers = teamMembers2.filter(student => student.profession == 'Designer');
const lawyers = teamMembers2.filter(student => student.profession == 'Lawyer');
const archaeologists = teamMembers2.filter(student => student.profession == 'Archaeologist');

let devs = developers  // <----- change the job type here and the function below will give correct results

const mostExperience = devs.reduce((acc, dev) => acc = acc > dev.yrsExperience? acc : dev.yrsExperience,);
const hasBestExp = devs.filter(dev =>  dev.yrsExperience >= mostExperience);
const mostExp = hasBestExp.map(dev => dev.name)
const jobType = hasBestExp.map(dev => dev.profession)

const hasMostExp = hasBestExp.map(dev => {
  for(d in dev) {    
    if (d == 'name' ) {      
      var name = `${dev[d]}`
    }
      };
  for(g in dev) {
    if (g == 'profession') {      
        var profession = ` ${dev[g]}`
      }
        }; 
     
    return {profession,name}
    })

console.log('Has most Experience =', hasMostExp)


// console.log('developers :', developers);
// console.log('Designers :', designers);
// console.log('Lawyers :', lawyers);
// console.log('Archaeologists :', archaeologists);
// console.log('mostEXP :',jobType, mostExp)


/*********************************************************************************************************************
 * *******************************************************************************************************************
 * ****************************           IMPORTANT CONTENT BELOW         ********************************************
 * *******************************************************************************************************************
 * *******************************************************************************************************************
 */
/**
 * code below very important for understanding complex reduce methods
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
 * code below given by another student as an answer to the above
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

