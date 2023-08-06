var maleMarriageEligibility=function (gender,age,boyName) {
    var result=gender===`male`&& age>=21?`Hey ${boyName} you are eligible for marriage`:` ${boyName} you are not eligible for marriage`;
    console.log(`condition :>>>>>${result}`);
}
maleMarriageEligibility(`male`,25,`Billgates`);
maleMarriageEligibility(`male`,17,`stew jobs`);
console.log(`----------------------------`);
var femaleMarriageEligibility= function (gender,age,GirlName ) {
    var result=gender==`female`&& age>=18?`Hey ${GirlName} you are eligible for marriage`:` ${GirlName} you are not eligible for marriage`;
    console.log(`condition :>>>>> ${result}`);
}
femaleMarriageEligibility(`female`,16,`Jenifer`);
femaleMarriageEligibility(`female`,27,`Malinda gates`);

    
