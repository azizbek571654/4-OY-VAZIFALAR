"use strict";
class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} so'm qo‘shildi`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${amount} so'm yechildi`);
        }
        else {
            console.log("Hisobda yetarli mablag' yo'q");
        }
    }
    get getOwner() {
        return this.ownerName;
    }
    set setOwner(newName) {
        if (newName.length >= 3) {
            this.ownerName = newName;
        }
        else {
            console.log("Ism juda qisqa");
        }
    }
}
BankAccount.bankName = "OpenAI Bank";
class PremiumAccount extends BankAccount {
    constructor(accountNumber, ownerName, balance) {
        super(accountNumber, ownerName, balance);
    }
    withdraw(amount) {
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
