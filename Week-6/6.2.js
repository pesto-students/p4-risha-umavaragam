function spiralOrder(matrix) {
    const h = matrix.length;
    const w = h > 0 ? matrix[0].length : 0;

    if (h === 0 || w === 0) return [];
    // Use first array of matrix as return array
    const ret = matrix[0];

    // Start from end of second array of the matrix (i.e. don't start spiral from 0, 0);
    let left = 0, 
    top = 1, 
    bottom = h - 1, 
    right = w - 1;
    let x = right, 
    y = top;
    let direction = 'd';

    while (left <= right && top <= bottom) {
        ret.push(matrix[y][x]);

        if (direction === 'r' && x === right) {
            direction = 'd'; 
            top++;
        }
        else if (direction === 'd' && y === bottom) {
            direction = 'l'; 
            right--;
        }
        else if (direction === 'l' && x === left) {
            direction = 'u'; 
            bottom--;
        }
        else if (direction === 'u' && y === top) {
            direction = 'r'; 
            left++;
        }

        switch (direction) {
            case 'r': x++; break;
            case 'd': y++; break;
            case 'l': x--; break;
            case 'u': y--; break;
        }
    }

    return ret;
};

let com = spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(com)

// timeComplexity-O(n)
// SpaceComplexity-