console.log(`--------shalloew clone-----------`);
let arrayNums=[20,3,4,56,40,900,49]
let shallows= arrayNums
shallows.push(55,66)
console.log(`Original array:${arrayNums}`);
console.log(`Cloned array:${shallows}`);
console.log(`--------shalloew clone-----------`);
let deepsite=Object.assign([],arrayNums);
deepsite.push(10,25)
console.log(`Original array:${arrayNums}`);
console.log(`Cloned array by deep method:${deepsite}`);
console.log(`--------------------------------`);
let arrayeven=[2,30,14,8];

let mergedobject=Object.assign(arrayNums,deepsite,arrayeven)
console.log(`After merging :`,mergedobject);
let empolyeeinfo={
    salary:{
        julymonth:`40,000INR`,
        Augmonth:`40,000INR`,
        junemonth:`40,000INR`,
        
    },
    address:{
        locality:{
            colony:`OM viradhan Society`,
            street:`kanch porkli,413102`,

        },
        city:`Mumbai`,
        state:`maharastra`,
        City:`india`,
    },
    mobies:[`+91 7798879747`,`+91 9545516187`,`+9177656759`]
    
}
empolyeeinfo.salary.julymonth=`80000`