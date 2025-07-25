// const, var and let keywords

const name = 'John'; // Block-scoped constant
var age = 30; // Function-scoped or Global-scoped variable
let city = 'New York'; // Block-scoped variable

if (true) {
    console.log('Inside the block:');
    const name = 'Jane'; // This 'name' is different from the outer 'name'
    var age = 25; // This will change the outer 'age' due to var's function/global scope
    let city = 'Los Angeles'; // This 'city' is block-scoped and does not affect the outer 'city'
    
    console.log(name); // Jane
    console.log(age); // 25
    console.log(city); // Los Angeles
}

console.log('Outside the block:');
console.log(name); // John
console.log(age); // 25 (changed by the inner block)
console.log(city); // New York (remains unchanged due to let’s block scope)

/*
* Hoisting
* Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compilation.
* This means that you can use variables and functions before they are declared in the code.
* However, only the declarations are hoisted, not the initializations.
* For variables declared with `var`, they are hoisted and initialized to `undefined`.
* For `let` and `const`, they are also hoisted but remain uninitialized until their declaration is encountered,
* leading to a "Temporal Dead Zone" error if accessed before declaration.
*/
console.log(hoistedVar); // undefined
var hoistedVar = 'I am hoisted';
console.log(hoistedVar); // I am hoisted

/*
* Primitive and Reference Types
*/

// Primitive Types
const number = 42; // Number
const string = 'Hello'; // String
const boolean = true; // Boolean
const nullValue = null; // Null
const undefinedValue = undefined; // Undefined
const symbolValue = Symbol('unique'); // Symbol
const bigIntValue = BigInt(12345678901234567890); // BigInt

// Reference Types
const array = [1, 2, 3]; // Array
const object = { key: 'value' }; // Object
const date = new Date(); // Date
const regex = /abc/; // Regular Expression

// The const keyworkd is used for variables that should not be reassigned, but it does not make the object immutable.
const person = {
    name: 'Alice',
    age: 25
};
person.age = 26; // This is allowed, as we are modifying a property of the object, not reassigning the variable.
console.log(person); // { name: 'Alice', age: 26 }

// for primitive types, reassignment is not allowed
// const number = 50;
// number = 50; // This would throw an error because 'number' is a constant