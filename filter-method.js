  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */

// node filter-method.js

// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
  const oldEnough = people.filter(person => person.age >= 21);
  console.log(oldEnough);

  const justPaul = people.filter(p => p.name === 'Paul');
  console.log(justPaul)
  // the above returns an array containing the person 'paul' object, the filter returns an array as standard.
  // if i wanted to return only the object and not in an array you can do it this way and target the [0] index
  // note: the callback function can be shortened from person to p as this is just a placeholder dummy name to represent the iterated
  //       items in the list/array etc so can be anything.
  const justPaul2 = people.filter(p => p.name === 'Paul')[0];
  console.log(justPaul2)
  
// **********************************************************************************************************************

  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];


  const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
  });

  console.log('candidates :', candidates);
 
// **********************************************************************************************************************

  // the above function is very complex and it is best to define an outside function 
  //containing the inner filter function from above, example below:

  const hasStrongSkills = student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
  }
  
  const candidates2 = students.filter( hasStrongSkills);

  console.log('hasStrongSkills :',candidates2);
// the above function has strong skills can now be used elsewhere 
//if required as is not contained within the candidates 2 function

// ****************************************************************************************************************************

// if you wanted to break it down further you could remove the inner function of strongSkills and declare a seperate function and 
// pass that function into strongSkills, example below:

const has5yrsExp = skill => skill.yrsExperience >= 5;

// you can then remove the return statement from the function below and move the .length to the back of the callback parentheses
//     and we can remove the let strongskills and turn it into a single line function
const hasStrongSkills2 = student => student.skills.filter(has5yrsExp).length > 0;  

const candidates3 = students.filter( hasStrongSkills2);

console.log('hasStrongSkills2 single line functions:',candidates3);
  
// additional challenge set by instructor to return only the candidates names using the map function

const names = candidates.map(n => n.name);
console.log('names = ',names);