let empName = 
`{
    "name": "Alex melon",
    "id": "E00245",
    "role": ["DEV", "DBA"],
    "age": "23",
    "doj": "11-12-2019",
    "married": "false",
    "adddress": {
        "street": "32.Lahma st. ",
        "city": "Innsbruck",
        "country": "Austria" 
    },
    "refered-by":"E0012"
}`;

let empInfo = JSON.parse(empName);
console.log(` address type of ==>  ${typeof empInfo}`);
let arrayrole = empInfo.role;
console.log(arrayrole);
console.log(empInfo.role[0]);
let list =empInfo.name;
//console.log(empInfo.name.split("")) ;
const lastname=list.split(" ")[1];
console.log(lastname);
let birth=empInfo.doj;
const year =birth.split("-")[2];
console.log(year);
