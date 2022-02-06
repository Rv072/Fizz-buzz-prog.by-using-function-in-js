// Algorithm
// step.1 :- start
// step 2 :- Take a input as n. 
// step 3:- Iterate the loop from 1 to n.
// step 4:- In if condition no. is divisible by 3 & 5 then print "fizz-buzz"
// step 5:-In else if statment check no, is divisible by 5 then print "fizz"
// step 6:-Again in else if statment we check no is divisible by 3 then print "buz"
// step7:- If all the above conditions are false then goes to else case and print the no. as it is.
// step 8:-Stop


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