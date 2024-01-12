let score = 33


console.log(typeof score);
console.log(typeof (score)); //writing in parenthesis is another way named as METHOD

/* example- score Engineering Graphics n Design Exam
now try to know what is type of score ? bcoz values might be stored in string /object/instead of just number and from front-end value send to backend through a form */

/* const {score} = req.body  can't say if shows that it is number or string */

let score2 = "33"


console.log(typeof score2);
console.log(typeof (score2));

let score3="33abc"
//number is written in lower-case.
let valueInNumber = Number(score3);//converting type
console.log(typeof valueInNumber);//printing converted type
console.log(valueInNumber) //printing value will Not a Number --- non-convertible

/*
play with conversion
33 -->NaN
null --> 0
true --> 1
undefined -->NaN
false -->0 */
 
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* 1--> true,0-->false,""-->false,"hit"-->true

/similarly exercise for converting number to string*/