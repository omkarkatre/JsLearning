var tcsInterviewEligibilty= function (gradScore,hscScore,sscScore,candidateName) {
    var result=gradScore>=70||hscScore>=80||sscScore>=90?`Congrates ${candidateName} you are eligible fot TCS interview`:`Unforunately ${candidateName} you are not eligible for interview`
    console.log(`Result:>>${ result}`);
}
tcsInterviewEligibilty(80,86,90,`omkar`);
tcsInterviewEligibilty(70,65,55,`rahul`);
tcsInterviewEligibilty(60,79,88,`suraj`);