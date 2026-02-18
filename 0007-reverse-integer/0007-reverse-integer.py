class Solution:
    def reverse(self, x):
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31

        result = 0
        sign = -1 if x < 0 else 1
        x = abs(x)

        while x != 0:
            pop = x % 10
            x //= 10

            # Check for overflow
            if result > (INT_MAX - pop) // 10:
                return 0

            result = result * 10 + pop

        return sign * result

# Example usage
sol = Solution()
print(sol.reverse(123))   # Output: 321
print(sol.reverse(-123))  # Output: -321
print(sol.reverse(120))   # Output: 21
