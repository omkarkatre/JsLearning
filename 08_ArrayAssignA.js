const arrayFruits=["Banana","Orange","Apple","Mango","Watermelon"];
console.log(`----------STEP1 ------------`);
console.log(`1]First and last elememt:${arrayFruits[0]},${arrayFruits[arrayFruits.length-1]}`);
 arrayFruits.unshift(`Papaya`);
 console.log(`2]Adding element Papaya: ${arrayFruits}`);
 arrayFruits.splice(4,1);
 console.log(`3]Removing mango from array:${arrayFruits}`);
 arrayFruits.push(`Pinapple`);
 console.log(`4]${arrayFruits}`);
 arrayFruits.splice(4,0,`Dragon`);
 console.log(`5]${arrayFruits}`);
 arrayFruits[arrayFruits.length-5]=`kiwi`
 console.log(`6] Replace an element orange with kiwi--->${arrayFruits}`);
 const indexFruit=arrayFruits.slice(1,4);
console.log(`7] log the element from index 1 to 4  ${indexFruit}`);
var arrayFruit=[`Dragon`,`Watermelon`,`Pinapple`];
let lengthOfArray=arrayFruit.length;
console.log(`Length of array--->${lengthOfArray}`);