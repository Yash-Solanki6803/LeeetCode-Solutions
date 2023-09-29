/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  if (nums.length < 2) return true;

  let check = 0; // 0 means unknown, 1 means increasing, -1 means decreasing

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // increasing
      if (check == 0) check = 1;
      else if (check == -1) return false;
    } else if (nums[i] < nums[i - 1]) {
      // decreasing
      if (check == 0) check = -1;
      else if (check == 1) return false;
    }
  }

  return true;
};
