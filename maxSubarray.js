// write a function which accepts an array of integers and a number called n
// the function should calculate the maximum sum of n consecutive elements in the array

function maxSubarraySum(arr, num) {
    // if number is greater than length of array
    // return null
  if (num > arr.length) {
    return null;
  }
  // if arr had negative numbers can't set max to O 
  let max = -Infinity;
  // do not want to have the length of the array
  // whatever the num is we want the array length - that number +  1 
  // ([1, 2, 5, 2, 8, 1, 5], 2) 
  // loop will always start at 1,2 then 5,2 or 1,5 but will never start at 5 at the very end of arr
  for (let i = 0; i < arr.length - num + 1; i++) {
      // temp will store the sum each time 
      // then compare to max 
      // if temp is larger than max
      // temp becomes max 
    temp = 0;
    //
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// ** TIME COMPLEXITY O(N^2)

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
