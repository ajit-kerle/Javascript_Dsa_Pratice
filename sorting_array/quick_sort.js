// quick sort js
function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp

    return arr
}

function getCorrectSidePosition(arr,pivot,left,right){
   let i=left
   let j=left

   while(i<=right){
    if(arr[i]<=pivot){
    swap(arr,i,j)
       i++
       j++
    }else{
       i++
    }
   }
   return (j-1)
}


function quickSort(arr,left,right){
    if(left>=right){
        return ;
    }
     
    let pivot=arr[right] 
    let currPosition=getCorrectSidePosition(arr,pivot,left,right)

    quickSort(arr,left,currPosition-1)
    quickSort(arr,currPosition+1,right)
}

let arr=[89,1,9,75,1,16,100,9]
quickSort(arr,0,arr.length-1)
console.log(arr)