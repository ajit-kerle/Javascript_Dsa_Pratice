// Count number of substrings with exactly K distinct characters

// let str='abc'
// let str='aba'
let str='aa'
let k=1

// Output: 2
// Explanation:Possible substrings with 2 distinct characters are {"ab", "bc"}
//===========================================
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
// console.log(solutionForK1(str,k))
//============================================

function countNumOfSubStrExactKDistinct(str,k){
   let ans=0
   let bmap=new Map()
   let smap=new Map()

   if(k==1){
    return solutionForK1(str)
   }

   let is=-1 // acquire small map
   let ib=-1 // acquire big map
   let j=-1  // for release
   let ch
    
   while(true){  // tc : n
    // flag var
    let f1=false
    let f2=false
    let f3=false
    while(ib<str.length-1){  // k times
        f1=true
        ib++
        bmap.set(str[ib],bmap.get(str[ib])+1||1) 
        if(bmap.size==k+1){
            ch=str[ib]
           removeFromMap(bmap,ch)
            ib--
            break
        }
    }
    while(is<ib){
        is++
        f2=true
        smap.set(str[is],smap.get(str[is])+1||1)

        if(smap.size==k){
            ch=str[is]
           removeFromMap(smap,ch)
            is--
            break
        }                                          // time complexity is O (n) 
    }                                              // space complexity is O(2n)
    while(j<is){
        f3=true
        if(bmap.size==k&& smap.size==k-1){
            ans+=ib-is
        }
        j++
           ch=str[j]
           removeFromMap(smap,ch)
           removeFromMap(bmap,ch)
          if(smap.size<k-1||bmap.size<k) {
            break
          } 

      }  

      if(f1==false && f2==false && f3==false){
        break
      }
   }
   console.log(ans)
}

countNumOfSubStrExactKDistinct(str,k)

//==========================================
function removeFromMap(map,ch){
    if(map.get(ch)==1){
        map.delete(ch)
    }else{
        map.set(ch,map.get(ch)-1)
    }
}



//==========================================
// function kDistinct(a,k) {
//   //Write your solution here
    
//     if(k==0) return 0
//     let freq={}
//     let n=a.length
//     let j=0
//     let count=0
//     let p
    
//     for(let i=0;i<n;i++){
//         freq[a[i]]= ++freq[a[i]] || 1
//         while(Object.keys(freq).length>k&&j<=i){
//             p=freq[a[j]]--
//             if(p==1)
//                 delete freq[a[j]]
//             j++
//         }
//         count+=(i-j+1)
//     }
//     return count
// }


// let result=kDistinct(str,k)-kDistinct(str,1)
// console.log(result)



//==============================
// for(let i=0;i<str.length;i++){
//         bmap.set(str[i],bmap.get(str[i])+1||1)
//     }

