//3.convert array of number into array of string in such a way that a:1 , ab:12
// like : [2,5] : ["ab",abcde]

function generateString(number){
let alhpabet='abcdefghijklmopqrstuvwxyz'

let finalStr=''
let currIndex=0

while(currIndex<number){
    finalStr+=alhpabet[currIndex%26]
    currIndex++
}
return finalStr
}

function encodeNumberWithCharacter(arr){
    let maxNumber
    for(let i=0;i<arr.length;i++){
        arr[i]=generateString(arr[i])
    }
}
console.log(generateString(1))