var myAtoi = function(s) {
    let i = 0;
    const n = s.length;

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Step 1: skip leading whitespaces
    while (i < n && s[i] === ' ') {
        i++;
    }

    // Step 2: handle sign
    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        if (s[i] === '-') sign = -1;
        i++;
    }

    // Step 3: convert digits
    let result = 0;

    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';

        // Step 4: overflow check
        if (result > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};