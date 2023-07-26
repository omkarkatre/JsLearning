console.log("----------STEP 1------------");
function row() {
    title="Welcome to my world";
    console.log("Title:",title);
}
row();
function column () {
    console.log("Today is my day");
    
}
column();
console.log("-------STEP 2---------");
function personalDetails(firstName,lastName,collegeName) {
    firstName="Omkar";
    lastName="Katre";
    collegeName="ADCET";

    console.log("FirstName:",firstName);
    console.log("lastName:",lastName);
    console.log("collegeName:",collegeName);
}
personalDetails();
console.log("-------STEP 3------------");
function swapValues(Name1,Name2){
    console.log("-------Before sawp------------");
    Name1="Virat";
    Name2="Anushka";
    console.log("Name1:",Name1);
    console.log("Name2:",Name2);
    console.log("----------After swap------------");
    var temp=Name1;
    Name1=Name2;
    Name2=temp;
    console.log("Name1:",Name1);
    console.log("Name2:",Name2);

    
}
swapValues();
function swapValue(Value1,Value2) {
    console.log("-------Before sawp------------");
    Value1=1000;
    Value2=2000;
    console.log("value1:",Value1);
    console.log("value2:",Value2);
    temp=Value1;
    Value1=Value2;
    Value2=temp;
    console.log("value1:",Value1);
    console.log("value2:",Value2);

}
swapValue();
console.log("-------STEP4--------");
function addThreeValues(a,b)
{
   a="10.23,600,40";
   console.log("before addition:",a);
   a=10.23+600+40;
   console.log("After addition:",a);
   b="Hello Good Morning";
   console.log("before addition:",b);
   b="HelloGoodMorning";
   console.log("After addition:",b);

   

}
addThreeValues();

