//Problem 6.1: Max Sum Contiguous SubarrayFind the contiguous subarray within an array,
// A of length N which has the largest sum.Input Format:
// The first and the only argument contains an integer array, 
//A. Output Format: Return an
//  integer representing the maximum possible sum of the contiguous subarray.Constraints:
//   1 <= N <= 1e6 -1000 <= A[i] <= 1000 For example:Input 1: A = [1, 2, 3, 4, -10]Output 
//   1: 10Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.Input 
//   2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output 
//   2: 6Explanation 
//   2: The subarray [4,-1,2,1] has the maximum possible sum of 6.


function maxSum(conArr) {
    let sum = conArr[0];
    let newHigh = conArr[0];
    let oldHigh = conArr[0];
    for (let i = 1; i < conArr.length; i++) {
        sum += conArr[i];
        if (sum >= newHigh ) {
            newHigh = sum;
        } else if(sum >=oldHigh){
            oldHigh = newHigh;
            newHigh = sum;
        }else{
            oldHigh = newHigh;
            sum =0;
        }
    }

    if (newHigh > oldHigh) {
        return newHigh;
    }
    return oldHigh;

}

let print = maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log(print)

// timeComplexity-o(n)
// SpaceComplecity- 
