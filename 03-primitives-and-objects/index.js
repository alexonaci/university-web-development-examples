/*
* Primitive and Reference Types
*/

// Primitive Types - mutable
const number = 42; // Number
const string = 'Hello'; // String
const boolean = true; // Boolean
const nullValue = null; // Null
const undefinedValue = undefined; // Undefined
const symbolValue = Symbol('unique'); // Symbol
const bigIntValue = BigInt(12345678901234567890); // BigInt

// 'asd'.toUpperCase(); // converts to new String('asd').toUpperCase() - this is an example of boxing

// // unboxing/boxing

// Boolean(1); // Converts number to boolean
// Number('123'); // Converts string to number
// String(123); // Converts number to string

// Reference Types - immutable
const array = [1, 2, 3, {}, '']; // Array, 
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
