let personalDetails={
    Name:`Omkar Katre`,
    DateofBirth:`24-12-2000`,
    age:`23`,
    city:`karad`,
    Country:`India`,
}
let collegedetails={
    Name:`ADCET`,
    City:`Astha`,
    Type:`Autonomus`,
}
let more=Object.assign({},personalDetails,collegedetails)
console.log(more);
console.log(`----------------------`);
let Akash=[`FullName=Akash Deasi`,`age=23`,`city=karad`]   
Object.freeze(Akash)
console.log(Akash);for (const element of Akash) {
    console.log(``,element);
}
console.log(`--------Reverse string--------------`);
String=`codemind Technology`;
var reverse= String.split(``).reverse().join(``)
console.log(`${reverse}`);
