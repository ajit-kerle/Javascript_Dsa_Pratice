 //first negative number in every window size of k in array 

const arr2=[10, -1, -5, 7, -15, 20, 18, -24] // outPut:[-1,-1,-5,-15,-15,-24]
let k2=3 
let n2=arr2.length


const firstNegativeSlidingWindow = (arr2, k2, n2) => {
    let windowEnd = 0
    let windowStart = 0
     
    const list = []
    const ans = []
    while(windowEnd<=n2){
        //   console.log(arr2[windowEnd])
        if(arr2[windowEnd]<0){
            list.push(arr2[windowEnd]) // -1,
            
        }
        if(windowEnd-windowStart+1==k2){
            if(list.length==0){
                ans.push(0)
            }else{
                
                ans.push(list.shift())
                if(arr2[windowStart-k2+1]==list.shift()){
                    list.pop()
                }

            }
          windowStart++
        }
        windowEnd++
    }
    return ans
   
        
}
console.log(firstNegativeSlidingWindow(arr2, k2, n2))

// =====================GeeksForGeeks======================================
// / javascript implementation to find the
// first negative integer in
// every window of size k
const fn1=(arr,k,n)=>{
    // A Double Ended Queue, Di that will
        // store indexes of useful array elements
        // for the current window of size k.
        // The useful elements are all negative integers.
        let deque = [];

        let ans=[]
         let i
       // first k subarray negative no
       for(i=0;i<k;i++){
        if(arr[i]<0){
            // / Add current element at the rear of Di
            // if it is a negative integer
            deque.push(i)
        }
       }  

       // rest of element

       for(;i<n;i++){ 
        // if Di is not empty then the element
            // at the front of the queue is the first
            // negative integer of the previous window

            if(deque.length!=0){
               ans.push(arr[deque[0]])
            }else{
                // else the window does not have a
            // negative integer
             ans.push(0)
            }
            while((deque.length!=0 && deque[0]<(i-k+1))){
                deque.shift()
            }
            if (arr[i] < 0)
                deque.push(i);
        }
        return ans
}
// console.log(fn1(arr2,k2,n2))

