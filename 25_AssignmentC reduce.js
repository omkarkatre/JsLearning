const array_numbers=[20,11,40,25,37,49,9,90,60,2,19]
let num=0;
array_numbers.reduce((currentvalue)=>{
 num=num+currentvalue;
currentvalue++;

})
console.log(num);