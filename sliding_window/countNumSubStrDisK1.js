// count num of sub str whit1 dis char
let str='aa'
let k=1

function solutionForK1(str){
    let ans=0

    let map=new Map()

    let i=-1
    let j=-1
    let ch

    while(true){
        let f1=false
        let f2=false
      while(i<str.length-1){
        f1=true
        i++
        map.set(str[i],map.get(str[i])+1||1) 
        
        ch=str[i]

        if(map.size==2){
            removeFromMap(map,ch)
            i--;
            break
        }
      }
      while(j<i){
        f2=true
        if(map.size==1){
         ans+=i-j
        }
        j++
        ch=str[j]
        removeFromMap(map,ch)
        if(map.size==0){
            break
        }
      }
      if(f1==false&& f2==false){
        break
      }
    }
    console.log(ans)
}

console.log(solutionForK1(str))

//=================================
function removeFromMap(map,ch){
    if(map.get(ch)==1){
        map.delete(ch)
    }else{
        map.set(ch,map.get(ch)-1)
    }
}