var engine = '2.0';

var car = {
    engine: '1.7v',
    start: function () {
        return this.engine;
    }
}

var anotherCar = {
    engine: '1000000'
}
//execution context
console.log(car.start());

var anotherCarControl = car.start.bind(anotherCar);

console.log(anotherCarControl());


var globalCarControl = car.start;

console.log(globalCarControl());

// this example works in the browser console
// we need to use `var` to create a property on the global object
// if we use `const` or `let`, it will not create a property on the global object
