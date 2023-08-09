const arrayNumbers=[20,31,40, 25,23,11,29,9,60,2,11];
console.log(`1] Length of array ${arrayNumbers.length}`);
console.log(`--------------------------------`);
console.log(`2] First and Last element:${arrayNumbers[0]},${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`--------------------------------`);
console.log(`3] third last element:${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`--------------------------------`);
sumEven=0;
for (const index in arrayNumbers) {
    if (arrayNumbers[index]%2==0) {
        console.log(`4] Even number:${arrayNumbers[index]}`);
        sumEven= sumEven+arrayNumbers[index];   

        
    }
}
console.log(`Even number:${sumEven}`);
oddEven=0;
for (const index in arrayNumbers) {
    if (arrayNumbers[index]%2!=0) {
        console.log(`5] odd number:${arrayNumbers[index]}`);    
        oddEven=oddEven+arrayNumbers[index] 
    }
   
}
console.log(`odd number:${oddEven}`);
sum=oddEven+sumEven;
console.log(`--------------------------------`);
console.log(`Sum of array element:${sum}`);
console.log(`--------------------------------`);
for (const index in arrayNumbers) {
    if (arrayNumbers[index]%5==0) {
        const element = arrayNumbers[index];
        console.log(`${element}`);
        
    }
}
console.log(`--------------------------------`);

console.log(`Is number 115 is aviable in loop : ${arrayNumbers.includes(115)}`);
console.log(`Is number 23 is aviable in loop : ${arrayNumbers.includes(23)}`);
