// returned the most fre element in an array
let arr=[1,2,3,4,6,4,31,34,1,32,1,4,0,0,9]

function mostFrequency(arr){
    let map=new Map()

    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i])==undefined){
            map.set(arr[i],1)
        }else{
            map.set(arr[i],map.get(arr[i])+1)
        }
    }
    
    let maxFreq=0
    let maxEle=null
    for(let pairs in map){
        if(maxFreq>pairs[1]){
            maxFreq=pairs[1]
            maxEle=pairs[0]
        }
    }
    return maxFreq
}
console.log(mostFrequency(arr))