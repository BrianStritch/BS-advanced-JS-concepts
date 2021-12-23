  
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
  const justPaul2 = people.filter(p => p.name === 'Paul')[0];
  console.log(justPaul2)
  
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