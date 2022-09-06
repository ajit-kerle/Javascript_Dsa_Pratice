// check whethere the number is prime or not

let n=23
function primeOrNot(n) {
   if(n<=1) return false
   if(n==2) return true 

   for(let i=2;i<n;i++){
    if(n%i==0){
        return false
    }
   }
   return true
   
}
// console.log(primeOrNot(n))

//==================================================
// check whethere the array element are prime or not
let arr = [1, 3, 7, 8, 12, 9, 21, 23]

function cheArrElePrime(arr){
   
   for(let i=0;i<arr.length;i++){
    if(primeOrNot(arr[i])){
        console.log(arr[i])
    }
   }
}

cheArrElePrime(arr)

// ==============================================
// print i to n prime number 

function oneToNPrime(n){
   for(let i=1;i<n;i++){
     if(primeOrNot(i)){
        console.log(i)
     }
   }
}
oneToNPrime(10)