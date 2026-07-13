// const nums: number[] = [2, 7, 11, 15];
// const target: number = 9;

// function twoSum(nums: number[], target) {
//      for (let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//            if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//      }

//      return
// };

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (map.has(need)) {
      return [map.get(need)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}


// console.log(twoSum(nums, target));
