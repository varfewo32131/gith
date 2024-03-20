// Function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Test case
const array = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
console.log("Array with duplicates:", array);
console.log("Array without duplicates:", removeDuplicates(array));
