// Function to check if two strings are anagrams
function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Sort characters in both strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2;
}

// Test cases
const word1 = "listen";
const word2 = "silent";
const word3 = "hello";
const word4 = "world";

console.log(`Are "${word1}" and "${word2}" anagrams?`, areAnagrams(word1, word2));
console.log(`Are "${word1}" and "${word3}" anagrams?`, areAnagrams(word1, word3));
console.log(`Are "${word1}" and "${word4}" anagrams?`, areAnagrams(word1, word4));
