var isMonotonic = function (nums) {
  let increasing;
  let flag = true;
  increasing = nums[0] < nums[1] ? true : false;
  console.log("increasing", increasing);
  //   nums.map((prev, i) => {
  //     console.log(prev, nums[i + 1], prev <= nums[i + 1]);
  //     if (prev < nums[i + 1] !== increasing && i < nums.length - 1) flag = false;
  //   });

  for (let i = 0; i < nums.length - 1; i++) {
    console.log(nums[i], nums[i + 1], nums[i] < nums[i + 1]);
    if (
      nums[i] < nums[i + 1] !== increasing &&
      i < nums.length - 1 &&
      nums[i] !== nums[i + 1]
    )
      flag = false;
  }

  return flag;
};

let nums = [6, 5, 4, 4];

console.log(isMonotonic(nums));
