// Comparison Operators

// Reset account passwords should not be the same as the old password.

// Task
// Write a program that takes old and new passwords as inputs and outputs 
// to the console the boolean value (true or false) that shows whether or not they match.

// Sample Input
// hl8792m
// hl8792m

// Sample Output
// true

// Remember that all comparison operators always return true or false.
// For example: console.log(5>4) outputs true.

function main() {
    var oldPass = readLine();
    var newPass = readLine();
    console.log(oldPass==newPass);
    
}