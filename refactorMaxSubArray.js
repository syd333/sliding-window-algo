function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  // store sum of first three integers (or num integers) in a variable called maxSum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // then reassign tempsum to maxsum
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // then subtracting one array value and adding one in
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// create variable sum from beginning of array 
// then next set of numbers being sum will just be subtracted from original variable 
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

// ** O(n)