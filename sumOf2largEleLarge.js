// sum of second large and last large element

let arr = [4, 8, 5, 3, 6, 1, 2, 3, 9,100]

function largestTwoNumberSum(arr) {
    let firstMax = arr[0]
    let secondMax = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= firstMax) {
            secondMax = firstMax
            firstMax = arr[i]
        } else if (arr[i] > secondMax) {
            secondMax = arr[i]
        }
    }
    return (firstMax+secondMax)
}
console.log(largestTwoNumberSum(arr))