let arr=[[10,2,3],[7,8,4],[6,9,5,]] //15,19,20

function totalSum(bank){
    let total=0
    for(let money of bank){
        total+=money
    }
    return total
}

function customer(arr){
    let richest=0
    for(let customer of arr){
        richest=Math.max(richest,totalSum(customer))
    }
    return richest
}
console.log(customer(arr))