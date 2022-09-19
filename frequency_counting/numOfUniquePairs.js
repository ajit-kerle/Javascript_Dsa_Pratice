// Number of unique pairs in an array
// Input: arr[] = {1, 1, 2} 
//Output: 4 
// (1, 1), (1, 2), (2, 1), (2, 2) are the only possible pairs.
let arr=[1, 1, 2]
let n=arr.length

function countUnique(arr, n){
 
        let s = new Set();
        for (let i = 0; i < n; i++)
        {
            s.add(arr[i]);
        }
        let count = Math.pow(s.size, 2);
        console.log(s)
 
        return count;
    }

const result=countUnique(arr,n)    

// console.log(result)
 //=============================
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
  for(let pairs in map){
    if(map.get(k-pairs[0])){

    }
  }
}
// console.log(uniquesPairs(arr1,k))