const accountId = 124578;
let accountEmail = "developer@mailinator.com";
var accountPassword = "Test#123";
accountCity = "Kolkata";
let accountState;

// Can not reassign the value of const variables
// accountId = 789445;
console.log(accountId);

/**
 * Prefer not to use var variables
 * that will cause the functional or block scope issues.
 * 
 * Also use let or const to define variables.
 */

accountEmail = "develop@rb.com";
accountPassword = "Dev#123";
accountCity = "Lakhnow";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
