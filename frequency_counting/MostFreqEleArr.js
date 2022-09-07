
//====================================================

// by using frequency counting
// find the maxximum no of occurences in an array
const arr=[1,48,8,54,87,21,578,68,23,18,48,69,48,578,48,578,578,578]


const maxOccurences=(arr)=>{
  const obj1={}
  let maxOccur=0 
  let maxChar=null
  
  for(let i=0;i<arr.length;i++){
    let currCount=0
    if(obj1.hasOwnProperty(arr[i])){ // true if key is present then it runs
       obj1[arr[i]]=obj1[arr[i]]+1
       currCount=obj1[arr[i]]
    }else{
      obj1[arr[i]]=1
    }

    if(maxOccur<currCount){
      maxOccur=currCount
      maxChar=arr[i]
    }
  } 
   return `${maxChar} Is occured ${maxOccur} times`
}


let result=maxOccurences(arr)

console.log(result)

// timeComplexity of hasOwnProperty is O(1)
// time complexity of object accessing deleting traversing is O(n) 
// time complexity of This solution is O(n) 


//===========================================
// returned the most fre element in an array
// let arr=[1,2,3,4,6,4,31,34,1,32,1,4,0,0,9]

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