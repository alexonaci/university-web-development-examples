const bmwF10 = {
    engine: '2.5turbo',
    wheels: 4,
    //...
}

function modifyWheels(car) {
    const clonedCar = { ...car}; // Object.assign({}, car);, structuredClone()
    return clonedCar;
}

const bmwG10 = modifyWheels(bmwF10);

console.log(bmwF10);

console.log(bmwG10);

// Object.freeze()