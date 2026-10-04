export class BankAccount {
  public accountNumber: string;
  private accountHolder: string;
  protected balance: number;

  constructor(accountNumber: string, accountHolder: string, balance: number) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: $${amount}`);
  }

  public withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } else {
      console.log("Insufficient balance");
    }
  }

  public showAccountDetails(): void {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Holder: ${this.accountHolder}`);
    console.log(`Balance: $${this.balance}`);
  }
}