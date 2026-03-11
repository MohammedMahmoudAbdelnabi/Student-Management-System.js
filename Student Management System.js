// Students names
let students = ["Ali", "Omar", "Sara", "Mona"];

// Students grades
let grades = [85, 70, 95, 60];

console.log("===== Students List =====");

for(let i = 0; i < students.length; i++){
    console.log(students[i] + " : " + grades[i]);
}

console.log("-------------------------");


// Add new student
students.push("Ahmed");
grades.push(88);

console.log("New student added.");

console.log("-------------------------");


// Search for student
let searchName = "Sara";

for(let i = 0; i < students.length; i++){

    if(students[i] === searchName){
        console.log(searchName + " found with grade: " + grades[i]);
    }

}

console.log("-------------------------");


// Calculate average grade
let sum = 0;

for(let i = 0; i < grades.length; i++){
    sum = sum + grades[i];
}

let average = sum / grades.length;

console.log("Average Grade: " + average);

console.log("-------------------------");


// Find highest grade
let max = grades[0];

for(let i = 0; i < grades.length; i++){

    if(grades[i] > max){
        max = grades[i];
    }

}

console.log("Highest Grade: " + max);

console.log("-------------------------");


// Find lowest grade
let min = grades[0];

for(let i = 0; i < grades.length; i++){

    if(grades[i] < min){
        min = grades[i];
    }

}

console.log("Lowest Grade: " + min);