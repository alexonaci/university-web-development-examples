// Callbacks and callback hell
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        callback(data);
    }, 1000);
}

function processData(data) {
    console.log('Processing data:', data);
}

// Using a callback to handle the asynchronous operation
fetchData((data) => {
    processData(data);
    // more nested callbacks can lead to callback hell (simulated)
    // fetchData((nestedData) => {
    //     processData(nestedData);
    //     fetchData((deepNestedData) => {
    //         processData(deepNestedData);
    //         // This can get messy quickly, leading to callback hell
    //     });
    // });
});

// Promises and promise chaining
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 2, name: 'Jane Doe' };
            resolve(data);
        }, 1000);
    });
}

function processDataPromise(data) {
    return new Promise((resolve) => {
        console.log('Processing data:', data);
        resolve(`Processed ${data.name}`);
    });
}

// Using promises to handle asynchronous operations
fetchDataPromise()
    .then(processDataPromise)
    .then((result) => {
        console.log(result); // Processed Jane Doe
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// async/await syntax
async function fetchDataAsync() {
    const data = await fetchDataPromise();
    return data;
}   

async function processDataAsync(data) {
    console.log('Processing data:', data);
    return `Processed ${data.name}`;
}

// Using async/await to handle asynchronous operations
// we use an IIFE (Immediately Invoked Function Expression) to use async/await at the top level
// This is necessary because top-level await is not supported in all environments.
(async () => {
    try {
        const data = await fetchDataAsync();
        const result = await processDataAsync(data);
        console.log(result); // Processed Jane Doe
    } catch (error) {
        console.error('Error:', error);
    }
})();

// an alternative way to use async/await without an IIFE
async function main() {
    try {
        const data = await fetchDataAsync();
        const result = await processDataAsync(data);
        console.log(result); // Processed Jane Doe
    } catch (error) {
        console.error('Error:', error);
    }
}