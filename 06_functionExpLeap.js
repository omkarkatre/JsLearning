var leapYear=function (year) {
    if (year=null||year==undefined||null==NaN) {
        console.log(`${year}:Invalid data `);
        
    } else {
        if (year%4==0) {
            console.log(`${year} :Year is leap year`);
        } else {
            console.log(`${year}:Year is not leap year`);
        }
        
    }
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear();