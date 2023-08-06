function reverseString(word) {
    var string=" ";
    wordlen=word.length-1;

    for (let index = wordlen; index >=0; index--) {
        var char=word.charAt(index);
        var string =string.concat(char);

        
    }
    console.log(`${string}`);
}
reverseString(`Hard work alawys pay back`);
reverseString(`Soon I will be angular IT Develpoer`);