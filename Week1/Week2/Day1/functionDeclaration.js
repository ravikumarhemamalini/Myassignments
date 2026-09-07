//function declaration

// Declaring a function using function declaration syntax
function userProfile(name) {
    // The function takes a parameter 'name' and returns a greeting message
    return `Hello, ${name}!`;
}
// Calling the function and logging the result to the console
console.log(userProfile("Hema"));


// Arrow function 
// Declaring a function using arrow function syntax
let double = (num) => { return num * 2; } // The function takes a parameter 'num' and returns its double
// Calling the arrow function and logging the result to the console
console.log(double(4));

// Anonymous Function 
// Declaring an anonymous function and assigning it to a variable
function setTimeoutExample() {
    // Using setTimeout to demonstrate an anonymous function that executes after a delay
    setTimeout(function () {
        // This anonymous function will execute after 2 seconds and log a message to the console
        console.log("This message is delayed for 2 seconds");
    },
        // The delay is set to 2000 milliseconds (2 seconds)
        2000);
}
setTimeoutExample(); // Calling the function to demonstrate the delayed message

// Callback Function
// Declaring a function that takes a callback function as an argument
function getUserData(callback) {
    // Using setTimeout to simulate an asynchronous operation that takes 3 seconds
    setTimeout(function () {
        callback("Call Back Function")
    }, 3000);
}
// Calling the getUserData function and passing a callback function that logs the message to the console
getUserData((message) => {
    console.log(message);
}); // Calling the function to demonstrate the callback function after a delay of 3 seconds