// function declarations vs expressions, first-class function

// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
const subtract = function(a, b) {
    return a - b;
}


// normal fucntions arrow functions
const greet = function(name) {
    return `Hello, ${name}!`;
}

const arrowGreet = (name) => `Hello, ${name}!`;



// classes and constructor functions
// Constructor Function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Eagle", "Talon TSi", 1993);

console.log(car1.make); // Eagle

// Method Definition in ES6 Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a noise.`;
    }
}
