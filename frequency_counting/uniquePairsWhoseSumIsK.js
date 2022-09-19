// Find unique pairs of elements in an array whose sum is k

let arr1=[7,2,4,9,11,34,3,2,1]
let k=5

function uniquesPairs(arr,k){
   // step create map
   let map=new Map()
   for(let i=0;i<arr.length;i++){
    map.set(arr[i],map.get(arr[i])+1||1)
   }
//    console.log(map)
   let res=new Map()
  for(let pairs in map){
    if(map.has(k-pairs[0])){  // 5-2:
       if(res.has(k-pairs[0])){
         res.set(pairs[0],k-pairs[0])
       }else{
        continue
       }
    }else{
        continue
    }
  }
  console.log(res)
}
console.log(uniquesPairs(arr1,k))