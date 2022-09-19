// find missing number
// swap sort

// logic 
//1. missing number i+1
//2. duplicate num arr[i]
        //[1,2,3,1,5]  // missing 4 and duplicate 1
// let arr=[2,3,1,5,1] // arr[0] place to its right place arr[0]-1 : 2-1 : 1 this right place
let arr=[2,5,9,6,9,3,8,9,7,1]// arr[0] place to its right place arr[0]-1 : 2-1 : 1 this right place

function swapSort(arr){
   let i=0
   let temp=0
   let n=0
   while(i<arr.length){
    if(arr[i]!==arr[arr[i]-1]){ // 2!=3
      n=arr[i]
      temp=arr[i]              //[]
      arr[i]=arr[n-1]
      arr[n-1]=temp
    //   i++
    //   console.log(arr)
    }
        i++
    
   }
    // console.log(arr)
   for(let j=0;j<arr.length;j++){
     if(arr[j]!==j+1){
        let str=`missing number ${j+1} and duplicate number ${arr[j]}`
       return  str
     }
   }


}

let res=swapSort(arr)
console.log(res)

//===========

// [2,5,9,6,9,3,8,9,7,1]

// [1,2,3,9,5,6,7,8,9,9]

