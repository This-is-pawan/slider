// function getting(Selection) {
//  let element = document.querySelector(Selection);
//  if (element) {
//    return element;
//  } else {
//    throw new Error(`Problem in your local: ${Selection}`);
//  }
// }

// function Counter(element, value) {
//  // console.log(element);
//  this.element = element;
//  this.value = value;
//  this.valueDOM = element.querySelector(".value");
//  this.decreaseButton = element.querySelector(".decrease");
//  this.resetButton = element.querySelector(".reset"); // Fixed typo
//  this.increaseButton = element.querySelector(".increase");
//  this.valueDOM.textContent = this.value;

//  // Bind methods to 'this'
//  this.decrease = this.Decrease.bind(this);
//  this.reset = this.Reset.bind(this);
//  this.increase = this.Increase.bind(this);

//  this.increaseButton.addEventListener('click',this.increase);
//  this.decreaseButton.addEventListener('click',this.decrease);
// this.resetButton.addEventListener('click',this.reset)
// }

// Counter.prototype.Increase = function () {
//  this.value++;
//  this.valueDOM.textContent = this.value;
// };
// Counter.prototype.Reset = function () {
//  this.value = 0;
//  this.valueDOM.textContent = this.value;
// };
// Counter.prototype.Decrease = function () {
//  this.value--;
//  this.valueDOM.textContent = this.value;
// };

// // Create Counter instances
// let firstCounter = new Counter(getting(".firstCounter"), 100);
// let secondCounter = new Counter(getting(".secondCounter"), 200);
// ############ it is optional for check the counter in,de,reset
// firstCounter.Increase();
// firstCounter.Decrease();
// firstCounter.Reset();

// secondCounter.Increase();
// secondCounter.Decrease();
// secondCounter.Reset();

// ###### use with constructor ########
// Function to get an element based on the selector
function getting(Selection) {
  let element = document.querySelector(Selection);
  if (element) {
    return element;
  } else {
    throw new Error(`Problem in your local: ${Selection}`);
  }
}

// Counter class
class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    this.valueDOM = element.querySelector(".value");
    this.decreaseButton = element.querySelector(".decrease");
    this.resetButton = element.querySelector(".reset");
    this.increaseButton = element.querySelector(".increase");
    this.valueDOM.textContent = this.value;

    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    this.increase = this.increase.bind(this);

    this.increaseButton.addEventListener("click", this.increase);
    this.decreaseButton.addEventListener("click", this.decrease);
    this.resetButton.addEventListener("click", this.reset);
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }

  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }

  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
}

let firstCounter = new Counter(getting(".firstCounter"), 100);
let secondCounter = new Counter(getting(".secondCounter"), 200);
