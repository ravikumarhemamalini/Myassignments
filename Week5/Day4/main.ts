import { SavingsAccount } from "./savingsAccount";

const myAccount = new SavingsAccount(
  "ACC1001",
  "Aadvik Srinivas",
  1000
);

myAccount.deposit(500);
myAccount.withdraw(200);

myAccount.showAccountDetails();
myAccount.showChildAccess();

console.log(myAccount.accountNumber); // Public: allowed

// console.log(myAccount.accountHolder);
// Private: ERROR - only accessible inside BankAccount

// console.log(myAccount.balance);
// Protected: ERROR - only accessible inside BankAccount or SavingsAccount