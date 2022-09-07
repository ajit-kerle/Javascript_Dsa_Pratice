// Largest sum of contiguous sub-array


let arr=[-20 ,-12 ,42 ,-10 ,25]

function largestSumOfContiSubArr(arr){
   
    let maxSum=Number.MIN_SAFE_INTEGER
    if(arr.length==1) return arr[0]
    
    let curSum=0
    
    for(let i=0;i<arr.length;i++){
        curSum=curSum+arr[i]
        if(curSum>maxSum){
            maxSum=curSum
        }
        if(curSum<0){
            curSum=0
        }
    }
    return maxSum
}


console.log(largestSumOfContiSubArr(arr))