// frequency counting 
// Q. Check first array is squar of second or not

const arr1 = [3, 4, 3, 6]; // first arr
const arr2 = [16, 36, 9, 9]; // second array for chceking square

const freqConut = (arr1, arr2) => {
  const arr1Obj = {}; // creating object1 for frequency count
  const arr2Obj = {}; 
  let sum = 0;


  // first loop for counting frequenscy and creating keys and freq count as value
  for (let i = 0; i < arr1.length; i++) {
    if (!arr1Obj[arr1[i]]) {
      // if keys does not exists then it will create
      arr1Obj[arr1[i]] = sum + 1;
    } else {
      // if key exists it will increment its count
      arr1Obj[arr1[i]] = arr1Obj[arr1[i]] + 1;
    }
  }


  
  for (let j = 0; j < arr2.length; j++) {
    if (!arr2Obj[arr2[j]]) {
      // if keys does not exists then it will create
      arr2Obj[arr2[j]] = sum + 1;
    } else {
      // if key exists it will increment its count
      arr2Obj[arr2[j]] = arr2Obj[arr2[j]] + 1;
    }
  }

  
  // this loop is for checking keys of arr1Obj in another object arr2Obj
  for (let key in arr1Obj) {
    if (arr2Obj[key * key] !== arr1Obj[key]) {
      // if keys are not present then
      return "false"; // it will return false
    }
    // console.log(key*key)
  }

  return "true"; // otherwise it will return true
};

result = freqConut(arr1, arr2)
console.log(result)

// time complexity is O(n)
// space complexity is  O(n)