
// Declare and initialize a variable
let number = 8;

// Function to check whether a number is Odd or Even

function isOddOrEven() {

    // Check whether the number is divisible by 2
    if (number % 2 === 0) {
        // If remainder is 0, the number is Even
        console.log("The Number", number, "is even");
    } else {
        // If remainder is not 0, the number is Odd
        console.log("The Number", number, "is odd")

    }
}
// Call the function and pass the number as an argument
isOddOrEven(number)

