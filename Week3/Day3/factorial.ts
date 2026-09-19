// Factorial of a given nonnegative integer using a loop (iterative approach)

function factorial(n: number): number {

    if (n<0)
    {
        throw new Error("Factorial is not defined for negative numbers");
    }

    let result: number = 1;

    for (let i=2; i<=n; i++)
{
            result = result*i;
    }

return result;
}
console.log("Factorial of 0:", factorial(0));
console.log("Factorial of 1:", factorial(1));
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 7:", factorial(7));

// Example of handling a negative number
try {
    console.log("Factorial of -3:", factorial(-3));
} catch (error) {
    console.log("Error:", (error as Error).message);
}