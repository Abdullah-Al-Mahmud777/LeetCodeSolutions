/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;
    // Map to store characters and their last seen index
    let charMap = new Map(); 

    for (let end = 0; end < s.length; end++) {
        let currentChar = s[end];

        // If the character is already in the map and within the current window
        if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
            // Move the start of the window to the position after the last occurrence
            start = charMap.get(currentChar) + 1;
        }

        // Update the latest index of the character
        charMap.set(currentChar, end);

        // Calculate the current window size and update maxLength if it's larger
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};

// Test Examples
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3