/* Instructions

Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

*/

function isDigit(s) {
    return s==parseFloat(s);
}