const { log } = require("console");

let value = 3
let negValue = -value
console.log("value is " + (value));
console.log("negative value is " + (negValue));
console.log("addition operation for 2+2" + (2+2));
console.log("subtraction operation for 2-2 " + (2-2));
console.log("multiplication operation for 2*2 " +(2*2));
console.log(" 2 power 3 2**3" + (2**3));
console.log("2 divide by 3"+ (2/3));
console.log("2 modulo 3 will give remainder " + (2%3));

let str1 = "hello";
let str2 = "world";
let str3 = str1 + " " + str2;
console.log("combine i.e string concatenation"+ (str3));
console.log("this is str1+ 2"+ ("1" + 2));
console.log("this is 1 + str2" + (1 + "2"));
console.log("this is str1 + 2 + 2" + ("1"+ 2 + 2));
console.log("this is 1 + 2 + str2" + (1 + 2 + "2"));
console.log("this is ( 3 + 4 ) * 5 modulo 3" + (3+4)*5%3);
console.log("plus true will converted to numeric equivalent"+ (+true));
console.log("plus false will converted to numeric equivalent" + (+false));
console.log("Empty String is converted into false so plus false equivalent " +(+""));

let num1,num2,num3;

num1 = num2 = num3 = 2+2 //don't use such tricky way to assign value.
/*

Using the chained assignment num1 = num2 = num3 = 2+2 in JavaScript is not recommended in most cases because
 it can lead to code that is hard to read and understand, especially for beginners. 
This syntax assigns the same value to multiple variables in a single statement. Here's why and when you might consider using or avoiding it:

Readability: Chaining assignments can make your code less readable and harder to maintain. It's often clearer to assign each variable on its own line.

Debugging Difficulty: If there's an error or you need to change the value, it can be harder to debug or update the code with chained assignments.

Implicit Global Variables: If you forget to declare any of these variables (num1, num2, num3) with var, let, or const, 
they will become global variables, which is usually undesirable and can lead to bugs.

Use Cases: It might be used for initializing several variables to the same value at the start of a function or script. 
However, clarity should be a priority, and it's often better to separate the assignments.

Alternative: Consider using separate statements for each assignment. This makes the code more explicit and easier to understand.

Here's a clearer way to write the same thing:

let num1 = 2 + 2;
let num2 = 2 + 2;
let num3 = 2 + 2;

*/
let gameCounter = 100
++gameCounter;
console.log("value of game counter after ++gamecounter "+ gameCounter);

let someNumber = 33
let stringNumber = String(someNumber)

console.log("stringNumber is " + stringNumber);

// next MDN simple operator

// Post-fix increment/decrement
let a = 5;
console.log("value of a:"+ (a));
let b = a++; // b gets the original value of a (5), then a is incremented by 1
console.log("after a++ in b, value of a:"+ (a)); // Output: 6
console.log("value of b:"+ (b)); // Output: 5

// Pre-fix increment/decrement
let x = 10;
console.log("value of x:" + (x) );;
let y = ++x; 

// x is incremented by 1, then y gets the updated value of x
console.log("as y is ++x,value of x:" + (x)); // Output: 11
console.log(" y is ++x , y value :"+ (y)); // Output: 11




/*Operation Precedence is for studying and understanding.
In Production environment it is not like this

Readability and maintainibility of your code is important.

*/

//----------OUTPUT--------------------

/*
let gameCounter = 100
++gameCounter;
console.log("value of game counter after ++gamecounter "+ gameCounter);

let someNumber = 33
let stringNumber = String(someNumber)

console.log("stringNumber is " + stringNumber);

// next MDN simple operator

// Post-fix increment/decrement
let a = 5;
console.log("value of a:"+ (a));
let b = a++; // b gets the original value of a (5), then a is incremented by 1
console.log("after a++ in b, value of a:"+ (a)); // Output: 6
console.log("value of b:"+ (b)); // Output: 5

// Pre-fix increment/decrement
let x = 10;
console.log("value of x:" + (x) );;
let y = ++x; 

// x is incremented by 1, then y gets the updated value of x
console.log("as y is ++x,value of x:" + (x)); // Output: 11
console.log(" y is ++x , y value :"+ (y)); // Output: 11
*/

