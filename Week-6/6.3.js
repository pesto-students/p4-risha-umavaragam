// Given an array of size N containing only 
// 0s, 1s, and 2s; sort the array in ascendingorder. 
// Example 
// 1:Input:N =5 arr[]= {0 2 1 2 0} Output:0 0 1 2 2
// Explanation: 0's 1's and 2's are segregated into ascending order.
// Example 2:Input:N =3 arr[] = {0 1 0} Output:0 0 1
// Explanation: 0s 1s and 2s are segregated into ascending order. 
// Time Complexity: O(N)
// Expected Auxiliary Space: O(1)Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2

// function sortingArray(n, arr) {
//     for (let i = 0; i < n-1; i++) {
//         let min_val = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[min_val] > arr[j]) {
//                 min_val = j;
//                 let temp = arr[min_val];
//                 arr[min_val] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }
//     return arr
// }

// // let sort = sortingArray(5, [0, 2, 1, 2, 0]);
// let sort = sortingArray(5, [0, 1, 0]);

// console.log(sort);

function sortingArray(n,arr){
    let sortedArray = [];
    let j=0, count0= 0, count1=0, count2=0;
    for (let i = 0; i < n; i++) {
        if(arr[i] == 0){
            count0++
        }
        if(arr[i] == 1){
            count1++
        }
        if(arr[i] == 2){
            count2++
        }
    }
        while(count0 > 0){
            sortedArray[j++] = 0;
            count0--;
        }
        while(count1 > 0){
            sortedArray[j++] = 1;
            count1--;
        }
        while(count2 > 0){
            sortedArray[j++] = 2;
            count2--;
        }
   

    return sortedArray;
}

let printArray = sortingArray(5, [0, 2, 1, 2, 0])
// let printArray = sortingArray(3, [0, 1, 0])
console.log(printArray)

// timeComplexity-O(N)
//Sapce Complexity-O(1)