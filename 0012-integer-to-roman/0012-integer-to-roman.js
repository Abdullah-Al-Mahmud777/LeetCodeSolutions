/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanMapping = [
        { value: 1000, symbol: "M" },
        { value: 900,  symbol: "CM" },
        { value: 500,  symbol: "D" },
        { value: 400,  symbol: "CD" },
        { value: 100,  symbol: "C" },
        { value: 90,   symbol: "XC" },
        { value: 50,   symbol: "L" },
        { value: 40,   symbol: "XL" },
        { value: 10,   symbol: "X" },
        { value: 9,    symbol: "IX" },
        { value: 5,    symbol: "V" },
        { value: 4,    symbol: "IV" },
        { value: 1,    symbol: "I" }
    ];

    // FIX 1: You must declare and initialize the result variable here!
    let result = ""; 

    for (const item of romanMapping) {
        if (num === 0) break;

        // Determine how many times this symbol fits into the current number
        const count = Math.floor(num / item.value);
        
        if (count > 0) {
            // Repeat the symbol 'count' times and append to the result
            result += item.symbol.repeat(count);
            // Reduce the number by the total subtracted value
            num %= item.value;
        }
    }

    return result;
}; // FIX 2: Moved the function closure cleanly here

// --- Example Test Cases ---
console.log(intToRoman(3749)); // Output: "MMMDCCXLIX"
console.log(intToRoman(58));   // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"