const timer = {
 secondsPassed: 0,
 minsPassed: 0,
 startTimer() {
  this.startTimer.intervalId = setInterval(() => {
   this.secondsPassed += 1;
   if (this.secondsPassed >= 60) {
    this.secondsPassed = 0;
    this.minsPassed += 1;
   }
  }, 1000);
 },
 stopTimer() {
  clearInterval(this.startTimer.intervalId);
 },
 getTime() {
  if (this.secondsPassed < 10) {
   return `${this.minsPassed}:0${this.secondsPassed}`;
  }
  return `${this.minsPassed}:${this.secondsPassed}`;
 },
 resetTimer() {
  this.secondsPassed = 0;
  this.minsPassed = 0;
 },
};

//= ========================================================================================
// what is context? object .... that has access to the global scope and can share data
// when context is lost?.... it is lost when the function is called and the function is no longer in the scope
// how to fix context?.... bind the function to the context and pass in the context

// const price = 100;

// const a = 10;

// const getName = () => {
//  console.log(this);

//  if (price > 10) {
//   return null;
//  }

//  return 'James';
// };

// console.log(a);
// console.log(window);

// getName();

// const obj = {
//  run: () => {
//   console.log(obj);
//  },
// };

// obj.run();

// timer task

// const timer = {
//  secondsPassed: 0,
//  minsPassed: 0,
//  startTimer() {
//   console.log('startTime ', this);

//   // input : function callback number.
//   // output : ID.

//   setInterval(() => {
//    console.log('callback context ', this);

//    this.secondsPassed += 1;

//   }, 1000);

//   // window.setInterval
//  },
//  //

//  stopTimer() {
//   //
//  },
//  resetTimer() {
//   //
//  },
// };

// // test data
// timer.startTimer(); // context +

// const func = timer.startTimer;
// func(); // context -

// const func1 = timer.startTimer.bind(timer);
// func(); // context +

// cases that we loose context...
// 1. function is called seperately from the context.
// 2. callback function is caLled.
// 3. nested function is called.

// ways to fix context...
// 1. bind the function to the context
// 2. use arrow function
// 3. use call or apply
// 4. use bind

// !!!!!

// Arrow functions are more or less equivalent to function statements, except that they bind the this argument to that of the parent scope.

// In other words, if an arrow function appears in the top scope, its this argument will always refer to the global scope(e.g., window in browsers or global in node.js), while an arrow function inside a regular function will have its this argument the same as its outer function, as your code demostrates.)
