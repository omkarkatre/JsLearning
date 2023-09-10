const arraynumbers=[20,11,40,25,37,49,9,90,60,2,19]
console.log(`WAP to valuves greater than 50`);
array =arraynumbers.filter((currentvalue)=>{
    return currentvalue>50;
})
console.log(array);
console.log(`-----------------------------------------`);
console.log(`WAP to find the even numbers in array`);
array =arraynumbers.filter((currentvalue)=>{
    return currentvalue%2==0;
})
console.log(array);
console.log(`-----------------------------`);
console.log(`WAP to find the odd numbers in array`);

array =arraynumbers.filter((currentvalue)=>{
    return currentvalue%2!=0;
})
console.log(array);
console.log(`-----------------------------`);
console.log(`WAP to find the numbers which are multiple of 5 in  array`);
array =arraynumbers.filter((currentvalue)=>{
    return currentvalue%5==0;
})
console.log(array);
console.log(`-----------------------------`);
console.log(`WAP to find the numbers which are between 20 and 50`);
array =arraynumbers.filter((currentvalue)=>{
    return currentvalue>=20&& currentvalue<=50;
})
console.log(array);




