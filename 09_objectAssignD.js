let professor={
    FirstName :`veer `,
    LastName:`patil`,
    Age :23,
    Bloodgroup:`A Poistive` ,
    mobNo:`123456555`,
    isMarried:`true`,
    Degrees:{
        enginerring:`CSC`,
        PHD:`Adv Computuing`,
        Diploma:`computer science `,

    getAddress:function () 
    {
    console.log(`Teacher Degree are:${this.enginerring},${this.PHD},${this.Diploma}`);
    
    }

    },
    certificate: [`Hacker rank certification`,`certificate in IFE course`,`certificate in Adv Programing`,`certificate in Full stack developer`]
    
}
professor.Degrees.getAddress();
professor.totalExperience=`14 years`;
professor.certificate.push(`Orcale ceritificate`)

