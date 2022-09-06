// swap techniques

let a=10, b=5

// using es6 syntax 
// [a,b]=[b,a]
// console.log(`Es6 syntax a: ${a} and b: ${b}`)
// console.log(a,b)

// using third variable 
function withThirdVar(a,b){
    console.log(`Befor a: ${a} and b: ${b}`)
   let c=a
   a=b
   b=c

   console.log(`after a: ${a} and b: ${b}`)
}
// withThirdVar(a,b)


//===================================


// using third variable 
function withOutUseThirdVar(a,b){
   console.log(`Befor a: ${a} and b: ${b}`)
   a=a+b // 15
   b=a-b // 10
   a=a-b  // 5
   console.log(`after a: ${a} and b: ${b}`)
}
// withOutUseThirdVar(a,b)

//===========================================

// reverse an array without using third array
let arr=[1,2,3,4,5,6]

function revArrWidOut3Arr(arr){
    let start=0
    let last=arr.length-1
    while(start<last){
        arr[start]=arr[start]+arr[last]
        arr[last]=arr[start]-arr[last]
        arr[start]=arr[start]-arr[last]
        start++
        last--
    }
    return arr
}

// console.log(revArrWidOut3Arr(arr))