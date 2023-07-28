function graterNumber(arg1,arg2) {
    var result=arg1>arg2?`Greatest number is :${arg1}:` : `smallest number is :${arg2}`;
    console.log(`${result}`);
    
}
graterNumber(10,-10);
graterNumber(899,800);
console.log(`--------------------`);
var fun=function (Num) {
    var result1=Num/2==0?`Given number is even is :${Num}`: `Given number is odd is :${Num}`;
    console.log(`${result1}`);
    return result1;
}
fun(29);
fun(44);
fun(0);
fun(1);
console.log(`--------------------------------`);
var wordLength=function (word) {
    len=word.length;
    console.log(`Length of word:${len}`);
    var res=len%2==0?`${len}EVEN NUMBER ` : `${len} ODD NUMBER :`;
    console.log(`Number is:${res}`);
    
}
wordLength("Javascript");
wordLength("Develper");
wordLength("Google");

