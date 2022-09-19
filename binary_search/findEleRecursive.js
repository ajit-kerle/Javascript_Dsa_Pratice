//1.search a number in sorted array using recursive approach [binary serach]

let arr=[1,2,3,4,5,6,7,8,9]
let f=7

function binaryRecursiveSearch(arr,start,end,f){
  
   if(end>=start){
     let mid=Math.floor((start+end)/2)
   if(arr[mid]==f){
    return mid
   }else if(f>arr[mid]){
    return binaryRecursiveSearch(arr,mid+1,end,f)
   }else if(f<arr[mid]){
    return binaryRecursiveSearch(arr,start,mid-1,f)
   }
   }
   return false
}
console.log(binaryRecursiveSearch(arr,0,arr.length,f))