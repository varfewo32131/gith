// Function to remove duplicates from an array
function removeDuplicates(array) {
    return array.filter((value, index, self) => {
        // Return true only for the first occurrence of each value
        return self.indexOf(value) === index;
    });
}

// Test case
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log("Array with duplicates:", numbers);
console.log("Array without duplicates:", removeDuplicates(numbers));
