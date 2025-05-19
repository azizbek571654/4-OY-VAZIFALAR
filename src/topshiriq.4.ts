class BankAccount {
    readonly accountNumber: string;
    public ownerName: string;
    private balance: number;
    static bankName: string = "OpenAI Bank";
  
    constructor(accountNumber: string, ownerName: string, balance: number) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    getBalance(): number {
      return this.balance;
    }
  
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        console.log(`${amount} so'm qo‘shildi`);
      }
    }
  
    withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`${amount} so'm yechildi`);
      } else {
        console.log("Hisobda yetarli mablag' yo'q");
      }
    }
  
    get getOwner(): string {
      return this.ownerName;
    }
  
    set setOwner(newName: string) {
      if (newName.length >= 3) {
        this.ownerName = newName;
      } else {
        console.log("Ism juda qisqa");
      }
    }
  }
  
  class PremiumAccount extends BankAccount {
    constructor(accountNumber: string, ownerName: string, balance: number) {
      super(accountNumber, ownerName, balance);
    }
  
    override withdraw(amount: number): void {
      console.log("Premium accountdan pul yechilyapti...");
      super.withdraw(amount);
    }
  }
  
  const acc1 = new BankAccount("0001", "Ali", 1000);
  console.log(BankAccount.bankName);
  acc1.deposit(500);
  acc1.withdraw(200);
  console.log("Balans:", acc1.getBalance());
  acc1.setOwner = "Al";
  acc1.setOwner = "Alisher";
  console.log("Yangi egasi:", acc1.getOwner);
  
  const acc2 = new PremiumAccount("0002", "Laylo", 2000);
  acc2.withdraw(1000);
  