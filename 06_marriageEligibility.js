var marriageEligibility=function (gender,age) {
    if (gender===`male`&& age>=21) {
        console.log(`${gender},${age}: you are eligible for marriage `);
    } else {
        if (gender==`female`&& age>=18){
            console.log(`${gender},${age}:  you are eligible for marriage `);
        } else {
            if (gender==`male`||`female`&& age<21) {
                console.log(`${gender},${age}: you are not eligible for marriage`); 
            }
            else{
                console.log(`${gender},${age}: Invalid value`); 
            }
            
        }
    }
}


marriageEligibility(`male`,17);
marriageEligibility(`male`,25);
marriageEligibility(`female`,16);
marriageEligibility(`female`,28);
marriageEligibility("other",35)
marriageEligibility("other",41)