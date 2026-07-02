/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;
    
    let left = 0, right = n - 1;
    let result = 0;
    
    while (left < right) {
        // Select the minimum of left and right heights and calculate area
        let currArea = Math.min(height[left], height[right]) * (right - left);
        
        // Update result if current area is greater than max area calculated so far
        result = Math.max(result, currArea);
        
        // If left height is less than right height, discard left height
        // Else discard right height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return result;
};