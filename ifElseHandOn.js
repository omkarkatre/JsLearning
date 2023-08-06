console.log(`-----------ASSIGNMENT 01-----------`);
console.log(`----------TASK 1-----------`);
function number(value) {
    if (value%2===0) {
        console.log(`Given number is ${value}:EVEN`);
        
    } else {
        console.log(`Given number is ${value}:ODD`);
    }
}
number(45);
number(70);
number(67);
number(98);
console.log(`----------TASK 2-----------`);
function voteEligible(age) 
{
    if (age>=18) {
        console.log(`You are eligible for vote:${age}`);
    } else {
        console.log(`You are not eligible for vote:${age}`);
    }
    
}
voteEligible(18);
voteEligible(20);
voteEligible(17);
voteEligible(40);
console.log(`----------TASK 3-----------`);
function result(string) {
    strlen=string.length;
    console.log(`length of string:${strlen}`);
    if (strlen>=10) {
        console.log(`string contains more than 10 character`);
    } else {
        console.log(`string not contains more than 10 character`);
    }
}
result(`JavaScript-ES6`);
console.log(`----------TASK 4-----------`);
function starts(string) {
    console.log(`${string}`);
   no= string.startsWith("JavaScript");
   console.log(`String starts with "Java":${no}`);
}
starts(`JavaScript Langagues`);




