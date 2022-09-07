// Order (2^2) time complexity program example
// fibonacci number recursion

let num=5
function fibo(num){
    if(num<=1){
        return num
    }
    return fibo(n-2)+fibo(n-1)
} 

fibo(num)

// time complexity is Big O(n) 
// also called Exponential time algorithm