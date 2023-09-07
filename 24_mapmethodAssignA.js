const array=[20,11,40,25,23,11,9,31,60,2,19]
console.log(`--------------------Adding 10 to each elemnt of array------------------`);
let Add=array.map((currentValue)=>{
   return currentValue+10;
})
console.log(Add);
console.log(`---------------Cube the each element of array--------------------`);
let cube=array.map((currentValue)=>{
    return currentValue*currentValue*currentValue;
 })
 console.log(cube);
 console.log(`---------------Addding index value in array --------------------`);
let increment=array.map((currentValue)=>{
    return currentValue+array.indexOf(currentValue) })
    console.log(increment);
