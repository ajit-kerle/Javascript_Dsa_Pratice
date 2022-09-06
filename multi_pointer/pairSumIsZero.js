// multi pointer approach 

// problem statement 
// find first pair whose sum is Zero 

// input arr=[-5,-3,-2,3,4,7]
// output []
const arr1=[-5,-3,-2,3,4,7]

// first brut force approach/ naive approach 

const naiveApproach=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==0){
                return [i,j]
            }
        }
    }
    return false
}

console.log(naiveApproach(arr1))