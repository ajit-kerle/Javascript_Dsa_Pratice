// Find substrings whose sum of ASCII value is divisible by K
// Given a string S and a number K, find the number of substrings of length K whose sum of ASCII value of characters is divisible by K.

let str='bcgabc'
let k=3
// Output : 2
// Substring “bcg” has sum of ASCII values 300 and “abc” has sum of ASCII values 294 which are divisible by 3.


function subStrAsciiValSumDivByK(str,k) {
  //Write your solution here
    let start=0
    let end=0
    
    let curSum=0
    let count=0
    while(end<str.length){
        curSum=curSum+str[end].charCodeAt(0)
        if(end-start+1<k){
            end++
        }else if(end-start+1==k){
            if(curSum%k==0){
                count++
            }
            curSum-=str[start].charCodeAt(0)
            start++
            end++
        }
    }
    return count
}

console.log(subStrAsciiValSumDivByK(str,k))
