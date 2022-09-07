// Order (log n) time complexity program example
// Binary search algorithms
let arr=[1,2,3,4,5,6,7,8,9]

function binarSearch(arr,val){
    let start=0
    let last=arr.length-1

    while(start<=last){
     let mid=Math.floor((start+last)/2);
     if(arr[mid]===val){
        return mid
     }else if(arr[mid]<val){
        start=mid+1
     }else{
        last=mid-1
     }
    }
   return -1
} 

binarSearch(arr,5)

// time complexity is Big O(log n) 
// also called logarithmic time algorithm