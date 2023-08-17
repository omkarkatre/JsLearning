let sbiBank={
    BankName:`sbiBank`,
    location:`Karad`,
    Ifsecode:`SBUKN007`,
    InterstRate:`4`,
    showdetails:function() {
        console.log(`Details of SBI Bank:${this.BankName},${this.location},${this.Ifsecode},${this.InterstRate}`);
    }
        
    }
    sbiBank.showdetails();
    let MyJSON=JSON.stringify(sbiBank,null,`\t`)
    console.log(`Bank Details:`,MyJSON);
let axisBank={
    BankName:`AxisBank`,
    location:`Karad`,
    Ifsecode:`AXISKN005`,
    InterstRate:`5`,
    showdetails:function() {
        console.log(`Details of Axis Bank:${this.BankName},${this.location},${this.Ifsecode},${this.InterstRate}`);
    }
}
axisBank.showdetails();
let hdfcBank={
    BankName:`hdfcBank`,
    location:`Pune`,
    Ifsecode:`HDFCN008`,
    InterstRate:`6`,
    showdetails:function() {
        console.log(`Details of hdfc Bank:${this.BankName},${this.location},${this.Ifsecode},${this.InterstRate}`);
    }
}

let YesBank={
    BankName:`YesBank`,
    location:`Mumbai`,
    Ifsecode:`YESN009`,
    InterstRate:`4`,
    showdetails:function() {
        console.log(`Details of Yes Bank:${this.BankName},${this.location},${this.Ifsecode},${this.InterstRate}`);
    }
}
YesBank.showdetails();
hdfcBank.showdetails(); 