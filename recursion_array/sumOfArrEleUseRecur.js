// find sum of array element using recursion

let arr=[4,5,9,4,7] // output : 29

function sumOfArrEleUseRecur(arr,n){
      if(n<=0) return 0 
      return (sumOfArrEleUseRecur(arr,n-1))+(arr[n-1])
}

console.log(sumOfArrEleUseRecur(arr,arr.length))
