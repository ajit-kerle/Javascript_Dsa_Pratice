//1.search a number in sorted array

let arr=[1,2,3,4,5,6,7,8,9]
let f=6

function linearSearc(arr,f){
     for(let i of arr){
        if(f==i){
            return true
        }
     }
}
console.log(linearSearc(arr,f))