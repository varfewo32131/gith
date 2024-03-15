// Function to find the nth Fibonacci number using iteration
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    let fibPrev = 0;
    let fibCurr = 1;
    let fibNext;

    for (let i = 2; i <= n; i++) {
        fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;
    }

    return fibCurr;
}

// Test cases
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Calculate and display the nth Fibonacci number for each test number
numbers.forEach(number => {
    console.log(`The ${number}th Fibonacci number is:`, fibonacci(number));
});
