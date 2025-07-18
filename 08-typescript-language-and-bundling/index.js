// Basic types
var age = 25;
var student = "Alex";
var isStudent = true;
// Union type with string literals
var label;
label = 'alex'; // valid
var person1 = {
    name: "Mihai",
    age: 30,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name));
    }
};
person1.greet();
var p = { x: 10, y: 20 };
// Difference: interfaces are best for objects/classes, types are more flexible (can do unions, primitives, etc.)
