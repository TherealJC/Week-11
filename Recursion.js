//Introduction to the JavaScript recursive functions
//A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.

//Suppose that you have a function called recurse(). The recurse() is a recursive function if it calls itself inside its body, like this:
function recurse() {
    // ...
    recurse();
    // ...
}

//A recursive function always has a condition to stop calling itself, otherwise, it will call itself indefinitely.
//So a recursive function typically looks like the following:
function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}

//Generally, recursive functions are used to break down a big problem into smaller ones.
//They are heavily used in the data structures like binary trees and graphs and algorithms such as binary search and quicksort.

//1) A simple JavaScript recursive function example
//Say you need to develop a function that counts down from a specified number to 1. For example, to count down from 10 to 1:
//The count down will stop when the next number is zero, therefore, we add an if condition as follows:
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);

//The countDown() seems to work as expected. However, as mentioned in the Function type tutorial, the name of the function is a
// reference to the actual function object.
//If somewhere in the code, the function name is set to null, the recursive function will stop working.
//For example, the following code will result in an error:
//let newYearCountDown = countDown;
//        somewhere in the code
// countDown = null;
//        the following function call will cause an error "Uncaught TypeError: countDown is not a function"
// newYearCountDown(10);

//How the script works:
//First, assign the countDown function name to the variable newYearCountDown.
//Second, set the countDown function reference to null.
//Third, call the newYearCountDown function.
//The code causes an error because the body of the countDown() function references the countDown function
//name which was set to null at the time of calling the function.
//To fix it, you can use a named function expression as follows:
let countDown = function f(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        f(nextNumber);
    }
}

let newYearCountDown = countDown;
countDown = null;
newYearCountDown(10);





//2) Calculate the sum of digits of a number example
//Given a number e.g., 324, calculate the sum of digits 3 + 2 + 4 = 9.
//To apply the recursive technique, you can use the following steps:

//f(324) = 4 + f(32)
//f(32)  = 2 + f(3)
//f(3)   = 3  + 0 (stop here)

//so

//f(324) = 4 + f(32) 
//f(324) = 4 + 2 + f(3) 
//f(324) = 4 + 2 + 3 

//The following illustrates the sumOfDigits() recursive function:
function sumOfDigits(num) {
    if (num == 0) {
        return 0;
    }
    return num % 10 + sumOfDigits(Math.floor(num / 10));
}

//How it works:
//The num%10 returns the remainder of the number after divided by 10, e.g., 324 % 10 = 4
//The Math.floor(num / 10) returns the whole part of the num / 10 e.g., Math.floor(324 / 10) = 32
//The if(num == 0) is a condition that stops calling the function.

//Summary: A recursive function is a function that calls itself until it doesn’t
//A recursive function always has a condition that stops the function from calling itself.