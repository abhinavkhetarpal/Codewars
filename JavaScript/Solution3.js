/* Instructions

You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything

Note that for some languages, the function main is the entry point of the program.

Here's how it will be tested:

    Solution.main("parameter1","parameter2");

*/

class Solution{
    static main() {
      console.log("Hello World!");
    }  
}

// Alternative solution - main method is defined directly on the class hence it is static, if it was defined on the class prototype then it would be an instance method

class Solution{}
Solution.main = () => console.log("Hello World!")