// find uniques elements in an array

let arr=[1,2,2,2,3,4,8,1,6,1]

function uniquesElement(arr){
   let res=[]
   let map=new Map()
   for(let i=0;i<arr.length;i++){
    map.set(arr[i],map.get(arr[i])+1||1)
   }

   for(let pairs of map){
    if(pairs[1]==1){    // unique elemnts
        res.push(pairs[0])
    }
    // if(pairs[1]>1){  //for duplicates 
    //     res.push(pairs[0])
    // }
   }
   return res
}
// console.log(uniquesElement(arr))

function removeDuplicate(arr){
    const set=new Set(arr)
    return [...set]
}
console.log(removeDuplicate(arr))
