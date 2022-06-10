// Logical or boolean operators


// Time flies when you’re having fun.
// Given a clock that measures 24 hours in a day, 
// write a program that takes the hour as input. If the hour is in the range of 0 to 12, 
// output am to the console, and output pm if it's not.

// Sample Input
// 13

// Sample Output

// pm

function main() {
    var hour = parseInt(readLine(), 10);
    console.log(hour<=12? 'am':'pm');
    
}