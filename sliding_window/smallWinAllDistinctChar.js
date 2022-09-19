// Smallest window that contains all characters of string itself

// Given a string S, find the smallest window(substring) length with all distinct characters of the given string.

// Input: aabbcc
// Output: 4
// Explanation: abbc of length 4 is the smallest window with the highest number of distinct characters
 
 let str='aabbcc'
//  let str='aaab'

// function smallWinDisChar(str){
//    let map=new Map() // map is for finding distinct char and storing
//    let len=str.length // answer of 

//    for(let i=0;i<str.length;i++){
//       map.set(str[i],1)
//    }
//    let dis=map.size // count of distinct
//    map.clear()
//    let i=0
//    let j=0
// //    console.log(n)
//    while(true){
//       let f1=false
//       let f2=false
//      // acquire till it invalid (map.size<dis)
//      while(i<str.length&&map.size<dis){
//        i++
//        if(map.get(str[i])==undefined){
//        map.set(str[i],1)
//        }else{
//         map.set(str[i],map.get(str[i])+1)
//        }
//        f1=true
//      } 
//      // collect and release
      
//     while(j<i && map.size==dis){
//         let potenLen=i-j;
//         if(potenLen<len){
//             len=potenLen
//         }
//         j++
//         if(map.get(str[j])==1){
//             map.delete(str[j])
//         }else{
//             map.set(str[j],map.get(str[j])-1)
//         }
//         f2=true
//     }

//     if(f1==false && f2==false){
//        break;
//     }
//    }
//    return len
// }

// console.log(smallWinDisChar(str))
// =========================================================
function string(str) {
  let set = new Set();
  for (let i = 0; i < str.length; i++) {
    set.add(str[i]);
  }

  let i = 0;
  let j = 0;
  let ans = str.length;
  let n = set.size; //no of unique character
  let m = new Map();

  // aquaire till it is invalid (map.size()<set.size())
  while (i < str.length) {
    //===================
    if (m.get(str[i]) == undefined) {
      m.set(str[i], 1);
    } else {                         // acquiring here 
      let key = m.get(str[i]);
      m.set(str[i], key + 1);
    }
    //==================
    if (m.size == n) {
      while (m.get(str[j]) > 1) {          // release here 
        let key = m.get(str[j]);
        m.set(str[j], key-1);
        j++;
      }
      ans = Math.min(ans, i-j+1);
    }
    //=============================

    i++;
  }
  return ans;
}

console.log(string(str))