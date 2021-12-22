  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1,2,3,4,5];
let results = [];
for (num of nums){
    results.push(num * 2);
}

console.log(results)

// Using map()
const multiplyBy2 = function(num){
    return num*2;
}
const mapResults = nums.map(multiplyBy2);
console.log(mapResults)


// Simplified w/ map()
// the map function expects a function so we can pass in an un named function
const mapResults2 = nums.map(function(num){return num*2;});
console.log('map-results-2 =', mapResults2)


// Simplfied w/ map() + arrow function
const mapResults3 = nums.map(num => num*2);
console.log('map-results-3 =', mapResults3)

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    }
  ];

const studentsWithIds = students.map(student => [student.name,student.id]);
console.log('students with ids =', studentsWithIds)



// need to find out how to take key value pair for name out of the above objects
// to get it to work i had to iterate through each student object and pick off the name key value pair and id key value pair 
//and return it so that the console.log below would print it correctly, done this as extra challenge.


const studentsWithIds2 = students.map(student => {
  for(p in student) {    
    if (p == 'name' ) {      
      var x = `${p}: ${student[p]}`
    }
      };
  for(g in student) {
    if (g == 'id') {      
        var y = `${g}: ${student[g]}`
      }
        };  
    return [x, y ]
    })

console.log('students with ids 2 =', studentsWithIds2)



