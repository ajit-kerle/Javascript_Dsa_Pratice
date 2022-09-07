// Order (nlog n) time complexity program example
// recursive merge sort
let arr=[1,2,3,4,5,6,7,8,9]

function mergeSort(arr){
   if(arr.length===1) return arr
   let mid=Math.floor(arr.length/2)
   let left=mergeSort(arr.slice(0,mid))
   let right=mergeSort(arr.slice(mid))
   return merge()
} 

function merge(arr1,arr2){
    let i=0
    let j=0
    let result=[]

    while(i<arr1.length&&j<arr2.length){
      if(arr1[i]<arr2[j]){
        result.push(arr1[i])
        i++
      }else{
        result.push(arr2[j])
        j++
      }
    }
    while(i<arr1.length){
     result.push(arr1[i])
     i++
    }
    while(j<arr1.length){
     result.push(arr2[j])
     j++
    }
    return result
}

mergeSort(arr)

// time complexity is Big O(nlog n) 
// also called linear logarithmic time algorithm