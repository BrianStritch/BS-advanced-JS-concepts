let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr,student) => {    
    for (let i = 0 ; i < arr.length ; i++) { 
            if (student == arr[i].name) {
                return arr[i].subjects;
        }
    }
};

let [first,second,...rest] = makeList(students,'John');
console.log(first,second,rest);


/**
 * Declare a variable named: makeList using the keyword const
The variable makeList should be assigned an arrow function
The arrow function should take two parameters named: arr, student
The arrow function should use a return statement
The function should return an array of the subjects for the student whose name is passed into the function when called.
Using destructuring on the return value from calling the function and passing in the students array,  and the string John, create 3 variables named: first, second, rest using the keyword let
log out the values  first, second, and rest to view their values
Note the function should return the correct subjects when the names Emily, Adam, and Fran are used, and this will be tested.
 */