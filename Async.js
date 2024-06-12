//Task 01:
//Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Example usage
iterateWithAsyncAwait([1, 2, 3, 4, 5]);


//Task 02:
//Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
async function fetchFakeData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "Fake API data" });
        }, 2000); // Simulates a 2-second API call
    });
}

async function awaitCall() {
    const response = await fetchFakeData();
    console.log(response.data);
}

// Example usage
awaitCall();


//Task 03:
//Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.
// Simulate an API call that might fail
async function fetchFakeDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a 50% chance of failure
            if (Math.random() > 0.5) {
                resolve({ data: "Fake API data" });
            } else {
                reject(new Error("Failed to fetch data from API"));
            }
        }, 2000); // Simulates a 2-second delay
    });
}

// Function to await the API call and log the data, with error handling
async function awaitCall() {
    try {
        const response = await fetchFakeDataWithError();
        console.log(response.data);
    } catch (error) {
        console.error("An error occurred while fetching data:", error.message);
    }
}

// Example usage
awaitCall();
