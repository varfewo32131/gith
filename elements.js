// Function to remove duplicate elements from an array
function removeDuplicates(arr) {
    const uniqueArray = [];

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is not already in the uniqueArray
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]); // Add the element to the uniqueArray
        }
    }

    return uniqueArray;
}

// Test case
const array = [1, 2, 3, 4, 3, 2, 1];
console.log("Array with duplicates:", array);
console.log("Array without duplicates:", removeDuplicates(array));
