function voteEligibility(age) {
    if (age==null||age==undefined||age<=0||age>120) {
        console.log(`Age:${age}-->Invalid Data`);
        
    } else {
        if (age>=18) {
            console.log(`Age:${age}-->You are eligible for voting`);
            
        } else {
            console.log(`Age:${age}-->You are not eligible for voting`);
            
        }
        
    }
}

voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);
voteEligibility(undefined);
