// sliding window  
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Input: nums = [1,2,3,1], k = 3
// Output: true

const nums = [1,2,3,1], k = 3  // sliding windows techniques

var containsNearbyDuplicate = function(nums, k) {
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashmap[nums[i]] || hashmap[nums[i]] === 0) {
            if (i - hashmap[nums[i]] <= k) {
                return true;
            }
        }
        hashmap[nums[i]] = i;
    }
    console.log(hashmap)
    return false;
};

console.log(containsNearbyDuplicate(nums,k))

