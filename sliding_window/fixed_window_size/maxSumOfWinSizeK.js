// maximum sum of window size k in array

const arr = [23,34,6,2,43,89,9,3,2,7];
let k=3

const bruteForceApro=(arr,k)=>{
   let maxSumSoFar=0  // we have to return max sum
   let sum=0          // surrent sum
   for(let i=0;i<arr.length-1;i++){ // this loop over array
    
    for(let j=i;j<i+k;j++){ //this loop over subarray
        sum=sum+arr[j]
    }
    if(sum>maxSumSoFar){ // if sum is greater then assign to maxSumSoFar
        maxSumSoFar=sum 
        sum=0   // then make sum to 0
    }else{
        sum=0
    }
   }
   return maxSumSoFar // return maxSumSoFar
}

console.log(bruteForceApro(arr,k))
// ==========================================
// By using Window sliding techniques

// const  arr1 = [2,5,3,4,6];
const arr1= [23,34,6,2,43,89,9,3,2,7] // len 10
// let k=3

const consecSum=(arr,k)=>{
    let maxSumSoFar=0
    let sum=0
    // first sum of k numbers
    for(let i=0;i<k;i++){
       sum=sum+arr[i]
    }
    // console.log(sum)
    maxSumSoFar=sum
  
    for(let j=k;j<arr.length;j++){
        sum=sum-arr[j-k]+arr[j]  // here decrease start index and increase end index and there value
        //  console.log(sum)
        if(sum>maxSumSoFar){ // if sum is greater than maxSum then assign it
            maxSumSoFar=sum

        }
       
    }
    return maxSumSoFar
}
console.log(consecSum(arr1,k))

// =======================================
// ajit kerle techniques
function slidingWindowSelf(arr,k){
    let start=0
    let last=0

    let maxSum=0
    let currSum=0
    while(last<arr.length){
      currSum=currSum+arr[last]
      if(last-start+1<k){
        last++
      }else if(last-start+1==k){
        maxSum=Math.max(currSum,maxSum)
        currSum=currSum-arr[start]
        start++
        last++
      }
    }
    console.log(maxSum)
}

console.log(slidingWindowSelf(arr1,k))