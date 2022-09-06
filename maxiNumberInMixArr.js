
// ===================================================
//  53. Maximum Subarray

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

let  nums = [5,4,-1,7,8]
// Output: 23

var maxSubArray = function(nums) {
    let maxSum=Number.MIN_SAFE_INTEGER;
    let curSum=0
    
    if(nums.length==1) return nums[0]
    
    for(let i=0;i<nums.length;i++){
        curSum=curSum+nums[i]
        if(curSum>maxSum){
            maxSum=curSum
        }
        if(curSum<0){
            curSum=0
        }
        
    }
    return maxSum
};

console.log(maxSubArray(nums))



