function generatePascalsTriangle(n) {
    const triangle = [[1]];
    for (let i = 1; i <= n; i++) {
        const row = [1];
        for (let j = 1; j < i; j++) {
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle;
}

// Generate first 6 rows of Pascal's Triangle
const triangle = generatePascalsTriangle(5);
triangle.forEach(row => console.log(row));
