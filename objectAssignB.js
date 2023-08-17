let banksbi={
    bankName: "SBI Bank",
    accountNumber: 12345673,
    ifsc: "SBIN000567",
    shareprice:406,
}
let bankLocation={
    street: "Wakad Main Road",
    city: "Pune",
    country : "India",
    pin: 411057,
}
let Newbank=Object.assign({},banksbi,bankLocation)
console.table(Newbank);
Newbank.bankName=`Hdfc bank`;
console.log(`----------using object.assign method-----------`);
console.log(`Name of bank:`,banksbi.bankName);//using object.assign method
console.log(`Name of bank:`,Newbank.bankName);
console.log(`----------using speard opertor-----------`);
let bank={...Newbank};
bank.city=`Mumbai`;
console.log(`Location of bank:`,bank.city);//using speard opertor
console.log(`Location of bank:`,bankLocation.city);


let rateofInterst={
    homeloanInterst:8,
    personloanInterst:10,
    dueInterst:11,
}
let bankDetails = Object.assign({},Newbank,rateofInterst)
//console.table(bankDetails);

console.log(`--------------step 6----------------`);
for (const element of bankDetails) {
    console.log(element);
}