// find array element in sorted array using binary search 

// let arr=[1,2,3,4,5,6,7,8,9,10]
let find=3
function binarySearch(arr,f){
   let start=0
   let end=arr.length
   let mid=0

   while(start<=end){
    mid=Math.floor((start+end-start)/2)
    if(f==arr[mid]){
        return mid
    }else if(arr[mid]>f){
       start=mid+1
    }else{
       end=mid-1
    }

   } 
   return -1
}
// console.log(binarySearch(arr,find))

// ======================================
// binary search on descending sorted arrray

let arr1=[9,8,7,6,5,4,3,2,1]

function binarySearchDscending(arr,X){
    let start=0
    let end=arr.length

    while (start <= end) {
 
        // Store the middle index
        // of the subarray
        let mid = Math.floor(start
                + (end - start) / 2);
 
        // Check if value at middle index
        // of the subarray equal to X
        if (X == arr[mid]) {
 
            // Element is found
            return mid;
        }
 
        // If X is smaller than the value
        // at middle index of the subarray
        else if (X < arr[mid]) {
 
            // Search in right
            // half of subarray
            start = mid + 1;
        }
        else {
 
            // Search in left
            // half of subarray
            end = mid - 1;
        }
    }
 
    // If X not found
    return -1;
}

console.log(binarySearchDscending(arr1,find))