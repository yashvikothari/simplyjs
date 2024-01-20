let score = 33
console.log(typeof score);
console.log(typeof (score)); //writing in parenthesis is another way named as METHOD

/* example- score Engineering Graphics n Design Exam
now try to know what is type of score ,we already know it is number? bcoz values might be stored in string /object/instead of just number and from front-end value send to backend through a form */

/* const {score} = req.body  can't say if shows that it is number or string when value brought from frontend */

let score2 = "33"
console.log(typeof score2);
console.log(typeof (score2));

let score3="33abc"//number is written in lower-case unlike below declaring as Number.
let valueInNumber = Number(score3);//converting type
console.log(typeof valueInNumber);//printing converted type
console.log(typeof (valueInNumber));//by parenthesis method printing converted type
console.log(valueInNumber) //printing value will Not a Number --- non-convertible

/*
play with conversion
33 -->NaN
null --> 0
true --> 1
undefined -->NaN
false -->0 */

let score4 = 33
console.log(score4);
console.log(typeof score4);
console.log(typeof (score4));
console.log(score4);
let valueofsc4 = Number(score4)
console.log(valueofsc4);



 


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* 1--> true,0-->false,""-->false,"hit"-->true
similarly exercise for converting number to string*/

/* Output
l2-->number
l3-->number
l11-->string
l12-->string
l16-->number
l17-->number
l18-->NaN
l30-->true
*/

/*play1 when playv101 is already a boolean, this conversion doesn't change its value.
*/

/*Output and facts
play with conversion
33 -->NaN //boolean true
null --> 0 //boolean false
true --> 1 //boolean true seems for every word and number except null,false
undefined -->NaN //boolean as false as it is considered like that in JS
false -->0 //boolean false 
""--> false // empty string 
"yashvi"-->true //non-empty string "yashvi" is considered true when converted to a Boolean
*/

let playv101=false
let letusknowv101 = Boolean(playv101)
console.log(playv101)
console.log(letusknowv101)
//play2 

/* 1--> true,0-->false,""-->false,"hit"-->true
similarly exercise for converting number to string*/



