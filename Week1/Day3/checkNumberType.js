// Function is to check whether the number is Positive, Negative and Zero

function checkNumber(x) {

    // Declare and initialize the variable
    let number = x
    // Check and return whether the number is greater than 0 and its Positive
    if (number > 0) {
        return ("The Number is Positive")
    }
    // Check and return whether the number is less than 0 and its Negative
    else if (number < 0) {
        return ("The Number is Negative")
    }

    // Check and return whether the number is neither greater nor less than 0, it must be zero
    else {
        return ("The Number is Netrual or zero")
    }

}

// Call the function with a positive number and print the result
console.log(checkNumber(1))
// Call the function with a negative number and print the result
console.log(checkNumber(-1))
// Call the function with zero and print the result
console.log(checkNumber(0)) 