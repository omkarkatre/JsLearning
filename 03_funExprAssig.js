var square=function(num){
    var square =num*num;
    console.log(`Square of numbers:${square}`);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);
console.log(`-------------------------------------------------------`);
console.log(`Type of function:${typeof(square)}`);
console.log(`-------------------Step 3------------------------------------`);

var area =function (length,width) {
    A=length*width;
    console.log(`Area of  rectangle:${A}`);
    
}
area(499,917);
console.log(`-----------------------Step 4--------------------------------`);
var swapValues=function (value1,value2) {
console.log(`Before swap value:${value1},${value2}`);
    temp=value1;
    value1=value2;
    value2=temp;
    console.log(`After swap value:${value1},${value2}`);

    
}
swapValues("Mahi","Rahina");
swapValues(55,57);
console.log(`-----------------------Step 5--------------------------------`);
var fun=function (params) {
    string="JS the most popular language of internet";
    console.log(`${string}`);
    var index=string.length;
    console.log(`Total number of character aviable in string:${index}`);
    console.log(`character at index 7:${string.charAt(7)}`);
    console.log(`character at index 12:${string.charAt(12)}`);
    var last=string.charAt(index-1)
    console.log(`Last character of string:${last}`);
    console.log(`first character of string:${string.charAt(0)}`);
    var split =string.split(" ");
    
    var square=split.length*split.length;
    console.log(`length of total words:${split.length}`);
    console.log(`Square of length:${square}`);



    

}
fun();



