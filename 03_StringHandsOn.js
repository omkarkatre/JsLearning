function stringHandsOn(params) {
   var string="       Hey you are doing good,keep it up      ";
    console.log(`Given string is:${string}`);
    console.log(`------STEP2---------------`);
    var stength =string.length;
    console.log(`Length of string:${stength}`);
    console.log(`------STEP2--------------------`);
    len=string.trim();
    console.log(`After removing and trailing extra spaces on string:${len}`);
    console.log(`---------------------------`);
    var extra =stength-len.length;
    console.log(`Count the total extra spaces in sentence:${extra}`);
    console.log(`---------------------------`);
    len.charAt(0);
    console.log(`first character :${len.charAt(0)} `);
        var lastName= len.charAt(len.length-1);
        console.log(`Last Character:${lastName}`);
        console.log(`---------------------------`);
       var name =len.split(" ");
       console.log(`Total words aviable in string after string 3:${name.length}`);
       console.log(`-------------------------`);
       var index=len.indexOf("good")
       console.log(`Index of given string:${index}`);
       console.log(`---------------------------`);
       var sub=len.substring(22);
       console.log(`${sub}`);
       console.log(`---------------------------`);
       
       console.log(`check string end with "up":${len.endsWith("up")}`);
       console.log(`---------------------------`);
       console.log(`check string start with "Hey":${len.startsWith("Hey")}`);

      
        

}
stringHandsOn();