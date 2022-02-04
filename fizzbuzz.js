//  A Fizz-Buzz Program By Using A function 
// Acceptance Criteria
// 1. In this function we have to check wheather input is divible 3 if yes O/P-->Buzz
// 2.if it is divisibale by 5 O/P-->Fizz
// 3.And if it divisible by both 3 & 5 O/P--> FizzBuzz
// And print the rest number in order upto the nth(input) number..


function myfun(num) {
    for(var i=1;i<=num;i++){
        if(i%3==0 && i%5==0){
            console.log("Fizz-Buzz");
        }
        else if(i%5==0){
            console.log("Fizz");
        }
        else if(i%3==0){
            console.log("Buzz.....");
        }
        else{
            console.log(i);
        }
    }
    
}
myfun(30);