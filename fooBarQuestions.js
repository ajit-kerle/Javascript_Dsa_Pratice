

let n=13

function fooBarQuestion(n){
    if(n%5==0 || n%7==0){
        return "fooBar"
    }else if(n%5==0){
        return "bar"
    }else if(n%3==0){
        return "foo"
    }else{
        return 'nothing'
    }
}
console.log(fooBarQuestion(n))