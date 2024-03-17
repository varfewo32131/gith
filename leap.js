// Function to check if a year is a leap year
function isLeapYear(year) {
    // Leap years are divisible by 4
    // But if a year is divisible by 100, it is not a leap year unless it is also divisible by 400

    if (year % 4 === 0) {
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            return true;
        }
    }
    
    return false;
}

// Test cases
const years = [2000, 2004, 2012, 2100, 1900, 2021];

years.forEach(year => {
    console.log(`${year} is a leap year:`, isLeapYear(year));
});
