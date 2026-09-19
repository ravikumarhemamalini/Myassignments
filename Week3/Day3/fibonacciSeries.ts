function fibonacci(n: number): number{

    let a: number = 0
    let b: number = 1

    if (n===0){

        return a;
    }

    for(let i=1; i<n; i++){
        let next: number = a+b;
        a = b;
        b = next;

    }

    return b;
}
console.log("Fibonacci of 0:", fibonacci(0));
console.log("Fibonacci of 1:", fibonacci(1));
console.log("Fibonacci of 5:", fibonacci(5));
console.log("Fibonacci of 7:", fibonacci(7));
console.log("Fibonacci of 10:", fibonacci(10));