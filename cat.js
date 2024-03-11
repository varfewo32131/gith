// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are equal
    return cleanedStr === reversedStr;
}

// Test cases
const testStrings = [
    "A man, a plan, a canal, Panama!",
    "racecar",
    "hello",
    "Was it a car or a cat I saw?"
];

// Check if each test string is a palindrome and display the result
testStrings.forEach(str => {
    const result = isPalindrome(str);
    console.log(`"${str}" is a palindrome: ${result}`);
});
