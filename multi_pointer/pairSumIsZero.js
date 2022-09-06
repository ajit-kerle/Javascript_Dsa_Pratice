// multi pointer approach 
//********************************** */
//  condition if array is sorted 
//********************************** */
// problem statement 
// find first pair whose sum is Zero 

// input arr=[-5,-3,-2,3,4,7]
// output [1,3]
const arr1=[-5,-3,-2,3,4,7]

// first brut force approach/ naive approach 

const naiveApproach=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
        // console.log(arr[i])
        for(let j=i+1;j<arr.length;j++){
            // console.log(arr[i])
            if(arr[i]+arr[j]==0){
                return [i,j]
            }
        }
    }
    return false
}

// console.log(naiveApproach(arr1))

// time Complexity is O (n^2)
// space complexity is O(1)

// =================================

function multiPointer(arr){
    let left=0
    let right=arr.length-1

    while(left<right){
        if(arr[left]+arr[right]==0) return [left,right]

        if(arr[left]+arr[right]>0){
            right--
        }
        if(arr[left]+arr[right]<0){
          left++
        }
    }
    return false
}
console.log(multiPointer(arr1))

// time Complexity is O (n)
// space complexity is O(1)