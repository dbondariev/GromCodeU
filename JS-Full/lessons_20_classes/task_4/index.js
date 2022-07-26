/* eslint-disable class-methods-use-this */
// online store

// /**
//  * @field {string} id
//  * @field {number} price
//  * @field {date} dateCreated
//  * @field {boolean} isConfirmed
//  * @field {date} dateConfirmed
//  * @field {string} city
//  * @field {string} type
//  */

class Order {
  constructor(price, city, type) {
    this.id = `${(Math.random() * 100).toFixed()}`;
    this.price = price;
    this.city = city;
    this.type = type;
    this.isConfirmed = false;
    this.dateCreated = new Date();
  }

  checkPrice() {
    return this.price > 1000 || false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  // bad
  // isValidType() {
  //   if (this.type === 'Buy') {
  //     return true;
  //   }
  //   if (this.type === 'Sell') {
  //     return false;
  //   }

  // better
  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

const order1 = new Order(1100, 'Odessa', 'Buy', 10);
order1.confirmOrder();

console.log(order1);

const order2 = new Order(100, 'Lviv', 'Sell');
order2.confirmOrder();
console.log(order2);

const order3 = new Order(12, 'Kiev', 'KKK');
console.log(order3);
console.log(order3.checkPrice(55));
console.log(order3.isValidType('Buy'));
console.log(order3.confirmOrder(true));
