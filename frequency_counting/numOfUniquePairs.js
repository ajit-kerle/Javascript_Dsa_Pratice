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

console.log(result)
 