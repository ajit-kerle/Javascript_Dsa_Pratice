// rotate array element by k element

let arr=[1,2,3,4,5,6,7,8]
let k=2

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
   console.log(arr) // [8,7,6,5,4,3,2,1]
   // 
   reverseArr(arr,0,k-1)
   console.log(arr) // [8,7]: [7,8]["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
   reverseArr(arr,k,arr.length-1)
   console.log(arr) //[1,2,3,4,5,6]
}
optimalRotation(arr,k)
console.log(arr)
