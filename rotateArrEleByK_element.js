// rotate array element by k element

let arr=[1,2,3,4,5,6,7,8]
let k=1

function reverseArr(arr,i,j){
   
   while(i<j){
     arr[i]=arr[i]+arr[j] //7
     arr[j]=arr[i]-arr[j]// 7-6:1
     arr[i]=arr[i]-arr[j]

    i++
    j--
   }
   
}

function optimalRotation(arr,k){
   // revese whole array
   reverseArr(arr,0,arr.length-1)
   console.log(arr)
   // 
   reverseArr(arr,0,k-1)
   console.log(arr)
   reverseArr(arr,k,arr.length-1)
   console.log(arr)
}
optimalRotation(arr,k)
console.log(arr)
