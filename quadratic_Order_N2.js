// Order (n^2) time complexity program example
// Bubble sort algorithms
let arr=[1,2,3,4,5,6,7,22,41,5]

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
} 

bubbleSort(arr)

// time complexity is Big O(n^6) 
// also called Quadratic time algorithm