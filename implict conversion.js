let result=`3`+2;
console.log(`${result} >>Summery>>>When we add number with string,then number is converted into string due to"Implict conversion">>>`,typeof(result));
result=`3`+true;
console.log(`${result} >>Summery>>>When we add boolen type value then is converted into string due to"Implict conversion">>>>`,typeof{result});
result=`3`+undefined;
console.log(`${result} >>Summery>>>When we add undefined value then is converted into string due to"Implict conversion">>>>`,typeof{result});
result=`3`+null; 
console.log(`${result} >>Summery>>>When we add null value then is converted into string due to"Implict conversion">>>>`,typeof{result});
console.log(`------------------boolen conversion to  number---------------------------------`);
let result1;
result1=`4`-true;
console.log(`${result1} >>Summery>>>Boolen value will be change in number, in case of substrction True=1,false=0`,typeof{result1});
result1=`4`+true;
console.log(`${result1} >>Summery>>>Boolen value will be change in number   `,typeof{result1});
result1=`4`+false;
console.log(`${result1} >>Summery>>>Boolen value will be change in number  `,typeof{result1});
console.log(`------------------string conversion to  number---------------------------------`);
result = `4`-`2`;
console.log(`${result}>>Summery>>>string value remeanis same `,typeof{result});
result = `4`-2;
console.log(`${result}>>Summery>>>string value will be change in boolen  `,typeof{result});
result = `4`*2;
console.log(`${result}>>Summery>>>string value value will be change `,typeof{result});



