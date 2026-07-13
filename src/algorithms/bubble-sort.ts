const nums = [5, 3, 8, 4, 12];

function bubbleSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // const temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

console.log(bubbleSort(nums)); // [3, 4, 5, 8, 12]

