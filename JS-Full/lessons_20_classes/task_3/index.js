// еще одна особенность работы с объектами созданные классами
// защищенность (приватность) 
// Wallet

class Wallet {
  constructor() {
    this._balance = 0;
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw (amount) {
    if (amount > this._balance) {
      console.log(`No enough funds`);
      return;
    }
    this._balance -= amount
  }
}

const wallet1 = new Wallet();
// свойство делится на публичное и приватное
// к публичным методам мы дальше можем обращаться из вне объектов, то из других частей программы, дргие разраб могли бы пользоваться этими свойствами

// не предназначено для публ пользования this._balance
console.log(wallet1.getBalance()); // 0
wallet1.deposit(45);
console.log(wallet1.getBalance()); // 45
wallet1.withdraw(20);
console.log(wallet1.getBalance()); // 25
wallet1.withdraw(50); // No enough gunds
console.log(wallet1.getBalance()); // 25??