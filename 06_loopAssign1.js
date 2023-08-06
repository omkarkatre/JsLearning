var word="I am very good IT Developer"//a e i o u==A E I O U
console.log(`Given string is :${word}`);
console.log(`------------------------------------`);
var count=0;
for (let index = 0; index < word.length; index++) {
    var char=word.charAt(index);
    if (char==`a`||char==`e`||char==`i`||char==`o`||char==`u`||
    char==`A`||char==`E`||char==`I`||char==`O`||char==`U`   ) 
    {
        console.log(` vowels is:${char}`);
        count++;
    }
}

console.log(`${count}`);
console.log(`-----------------Sum of cube from 1 to 5-------------------`);
function sumof() {
    sum=0;
    var cube;
    for( index=0; index<=5;index++)
    {
        cube=index*index*index;
        sum=sum+cube;
    }
    console.log(`Sum of cube:${sum}`);
}
sumof(5);
console.log(`----------Step 3-------`);
function oddPostionedChars(string) {
  var str="";
    for (let index = 0; index < string.length; index++) {
        var now=string.charAt(index);
       if (index%2!==0 && now!=" ") {
            str=str+now;

        
       }
        
    }
    console.log(`${str}`);
}
oddPostionedChars('Hard work alawys pay back')
oddPostionedChars(`Soon I will be angular IT Develpoer`)