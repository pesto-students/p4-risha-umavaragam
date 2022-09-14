// // Given an array S of n integers, 
// find three integers in S such that the sum is closest to given number, target.
// Return the sum of the three integers.Assume that there will only beone solution
// Example: given array S = {-1 2 1 -4}, and target = 1. 
// The sum that is closest to thetarget is 2. (-1 + 2 + 1 = 2)
function find3Numbers(A, arr_size, sum)
{
    let l, r;
 
    A.sort((a,b) => a-b);
 
    for (let i = 0; i < arr_size - 2; i++) {
 
        l = i + 1;
         
        r = arr_size - 1;
        while (l < r) {
            if (A[i] + A[l] + A[r] == sum)
            {
            console.log("Triplet is " + A[i] + ", "
                  + A[l] + ", " + A[r]);
                return true;
            }
            else if (A[i] + A[l] + A[r] < sum)
                l++;
            else 
                r--;
        }
    }
 
    return false;
}
 
 
    let A = [-1, 2, 1, -4];
    let sum = 2;
    let arr_size = A.length;
 
    find3Numbers(A, arr_size, sum);

    // timeComplexity-0(n^2)
    // space*Complexity-O(1)
