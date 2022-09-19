// sort 0 and 1 sarray

let arr=[1,0,1,0,1,0,1,0]

function zeroAndOnes(arr){
     let count=0
     let curr=0
     for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            count++
        }
     }
     let count1=arr.length-count
     while(count>0){
        arr[curr]=0
        count--
        curr++
     }
     while(count1>0){
        arr[curr]=1
        count1--
        curr++
     }
     return arr
}
console.log(zeroAndOnes(arr))
//==========================

// function optimizeApproach(arr){
//    let start=0
//    let end=arr.length-1

//    while(start<end){
//       // if current value att left index is zero then we do not want anything to do
//       while(arr[start]==0 && start<end){
//         start++
//       }
//       // if current value att left index is one then we do not want anything to do
//       while(arr[end]==1 && start<end){
//         end--
//       }

//       // this is checking arr is sorted 
//       if(start<end){
//         [arr[start],arr[end]]=[arr[end],arr[start]]
//       }
//    }
//    return arr
// }

// console.log(optimizeApproach(arr))