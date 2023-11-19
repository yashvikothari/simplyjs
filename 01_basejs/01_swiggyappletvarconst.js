const accountId = 1004005;
let accountEmail = "contactexample@googlemail.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;

// accountId = 2 // not alloweds

accountEmail = "abc@yck.com";
accountPassword = "1231230";
accountCity = "Ahmedabad";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
Using let helps r where js in scope assigns if accountPassowrd is assigned it will not change & considered as seperate {}.
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
