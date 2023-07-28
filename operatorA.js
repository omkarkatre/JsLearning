function squareOfWordLength(name) {
    name.length;
    console.log(`Length of string:${ name.length}`);
    var square=name.length* name.length;
    console.log(`Square of length:`,square);
    
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(`-----------------------------`);
var string=`I am angular Developer`;
string.length;
var splited =string.split(" ")
var total=splited.length;
console.log(`Number of words in string:${total}`);

console.log(`Length of string: ${string.length}`);
console.log(`-----------------------`);
str=string.length/total;
console.log(`Divide by total number words aviable:${str}`);
console.log(`-----------------------------`);
var my=string.length*total;
console.log(`Multiply by total number words aviable:${my}`);


