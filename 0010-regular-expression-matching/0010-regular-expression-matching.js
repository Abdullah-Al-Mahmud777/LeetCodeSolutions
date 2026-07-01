function isMatch(s, p) {
    const m = s.length;
    const n = p.length;

    // dp[i][j] = true if s[0..i) matches p[0..j)
    const dp = Array.from({ length: m + 1 }, () =>
        Array(n + 1).fill(false)
    );

    dp[0][0] = true;

    // Handle patterns like a*, a*b*, a*b*c* matching empty string
    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    const matches = (i, j) => {
        return (
            i > 0 &&
            (p[j - 1] === '.' || s[i - 1] === p[j - 1])
        );
    };

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {

            if (p[j - 1] === '*') {
                // Case 1: ignore "x*"
                dp[i][j] = dp[i][j - 2];

                // Case 2: use "*"
                if (matches(i, j - 1)) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }

            } else {
                if (matches(i, j)) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
    }

    return dp[m][n];
}