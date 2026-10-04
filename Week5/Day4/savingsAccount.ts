import { BankAccount } from "./bankAccount";

export class SavingsAccount extends BankAccount {
  public showChildAccess(): void {
    console.log(`Account Number: ${this.accountNumber}`); // Public: allowed
    console.log(`Balance: $${this.balance}`); // Protected: allowed
    // console.log(this.accountHolder);
    // Private: ERROR - cannot access in child class
  }
}