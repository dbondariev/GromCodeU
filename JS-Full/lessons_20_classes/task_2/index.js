// приминения класса для наследования

// eslint-disable-next-line max-classes-per-file
class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`); // метод
  }

  stop() {
    console.log(`${this.name} stopped`); // метод
  }
};


class Ship extends Vehicle {
  constructor(name, maxSpeed) {
    super(name, false, maxSpeed);
    this.maxSpeed = maxSpeed;
  }

  // option 1
  // startMachine() {
  //   console.log(`${this.name} lifting anchor up`);
  //   this.move();
  // }

  // option 2
  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  // option 1
  // stopMachine() {
  //   this.stop();
  //   console.log(`${this.name} lifting anchor down`);
  // }

  // option 2
  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
};

const ship1 = new Ship('Argo', 200);
console.log(ship1);
ship1.move();
ship1.stop();


