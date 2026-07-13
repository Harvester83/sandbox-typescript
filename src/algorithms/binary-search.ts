function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 3, 5, 8, 10, 15], 8))

// ITERATION - 1
// left  = 0
// right = 5 // arr.length - 1
// mid   = 2 // 0 + ((5 - 0) // 2 )
// 5 === 8   // arr[mid] === target -> left = mid + 1;    left = 3

// ITERATION - 2
// left  = 3
// right = 5
// mid   = 4 //  3 + ((5 - 3) // 2)
// 10 === 8   // arr[mid] === target  -> right = mid - 1; right = 4

// ITERATION - 3
// left  = 3
// right = 4
// mid   = 3 //  3 + ((4 - 3) // 2)
// 8 === 8

