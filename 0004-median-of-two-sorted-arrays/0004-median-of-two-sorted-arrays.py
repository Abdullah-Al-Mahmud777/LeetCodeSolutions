from typing import List

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # Step 1: Ensure nums1 is the smaller array
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
        
        m, n = len(nums1), len(nums2)
        low, high = 0, m
        
        while low <= high:
            # Step 2: Calculate partitions
            partition1 = (low + high) // 2
            partition2 = (m + n + 1) // 2 - partition1
            
            # Step 3: Handle edge cases for empty partitions
            maxLeft1 = float('-inf') if partition1 == 0 else nums1[partition1 - 1]
            minRight1 = float('inf') if partition1 == m else nums1[partition1]
            
            maxLeft2 = float('-inf') if partition2 == 0 else nums2[partition2 - 1]
            minRight2 = float('inf') if partition2 == n else nums2[partition2]
            
            # Step 4: Check if partition is correct
            if maxLeft1 <= minRight2 and maxLeft2 <= minRight1:
                # If total length is odd
                if (m + n) % 2 == 1:
                    return float(max(maxLeft1, maxLeft2))
                # If total length is even
                else:
                    return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0
            
            elif maxLeft1 > minRight2:
                # We are too far right, move left
                high = partition1 - 1
            else:
                # We are too far left, move right
                low = partition1 + 1
                
        return 0.0