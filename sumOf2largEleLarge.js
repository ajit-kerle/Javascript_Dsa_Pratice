// sum of second large and last large element

// let arr = [4, 8, 5, 3, 6, 1, 2, 3, 9,100]

// function largestTwoNumberSum(arr) {
//     let firstMax = arr[0]
//     let secondMax = -Infinity

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= firstMax) {
//             secondMax = firstMax
//             firstMax = arr[i]
//         } else if (arr[i] > secondMax) {
//             secondMax = arr[i]
//         }
//     }
//     return (firstMax+secondMax)
// }
// console.log(largestTwoNumberSum(arr))

//========================================

let arr = [4, 8, 5, 3, 6, 1, 2, 3, 9,100]


function largestTwoNumberSumApproch2(arr) {
    let top1=0
    let top2=0
    if(arr[0]>arr[1]){
        top1=arr[0]
        top2=arr[1]
    }else{
        top1=arr[1]  
        top2=arr[0]  
    }

    for( let i=2;i<arr.length;i++){
        if(arr[i]<top1 && arr[i]>top2){
            top2=arr[i]
        }else if(arr[i]>top1){
            top2=top1
            top1=arr[i]
        }
    }
    console.log(top2+top1)
    return 
}


console.log(largestTwoNumberSumApproch2(arr))











