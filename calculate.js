// Function to calculate the factorial of a number
function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: factorial of n is n multiplied by factorial of (n - 1)
    return n * factorial(n - 1);
}

// Test the factorial function
const num = 5;
console.log(`Factorial of ${num} is:`, factorial(num));
