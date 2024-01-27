/* comparisons 

1.imp topic - numbers i.e greater than,less than , equal to
2.not imp topic - numbers

---------------------------------

When comparing strings with numbers, the strings are converted to numbers. 
null is converted as 0 number in relational comparisons but not in equality comparisons. (console.log(1 == '1');
 == (equality operator) 
 or === (strict equality operator).
undefined is not equal to, greater than, or less than 0

*/

// Comparison of numbers
console.log("Number Comparison 1.2 greater than 1  2. 2 greater than equal to 1, 3. 2 less than 1 4. 2 double equals to 1 ");
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false

// Comparison with string numbers
console.log("2" > 1); // true
console.log("02" > 1); // true

// Comparisons involving null
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// Comparisons involving undefined
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// == (Equality Operator):

//Compares two values for equality after type conversion. 

console.log(1 == '1'); // true (number and string are considered equal after type conversion).

// === (Strict Equality Operator):Compares both the value and type, without converting types.

console.log(1 === '1'); // false (number and string are not considered equal as their types are different).

//Avoid language inconsistency by following typscript or restricting by yourself only.