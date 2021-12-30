let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];


const averagePoints = (arr, subject) => {
    let result = 0
    let found = 0
    for (let i = 0 ; i < arr.length ; i++) {              
        for (let j = 0 ; j < arr[i].subjects.length ; j++){  
            if (subject == arr[i].subjects[j]) {
                if(subject in arr[i].results){
                    result += arr[i].results[subject]
                    found += 1
                }
                } 
        }
    }
    return result / found     
}

let result = averagePoints(students, 'english');   // will return the average of any subject in the list just change the string text
console.log(result)

/**
 * 1.	Declare a variable named averagePoints using the keyword const
2.	Assign it an arrow function, which should take two parameters named: arr and subject
3.	The function should have a return statement
4.	Declare a variable named: result using the keyword let
5.	Assign it the return value from calling the function averagePoints, and passing it the students array and one of the following strings: 'maths', 'english', 'cad', 'science', 'art'
6.	log out the variable result to see its value
7.	The function should return the correct value no matter which subject is used.

 */