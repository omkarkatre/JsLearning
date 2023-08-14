
var factorial=function (fact) 
{
    result=1;
    for (let index = fact; index>= 1; index--) 
    {
        result=result*index;
    }
    console.log(`factoriall of ${fact} is :${result}`);
}
factorial(9);
factorial(5);
factorial(7);

factorial(11);
factorial(17);
