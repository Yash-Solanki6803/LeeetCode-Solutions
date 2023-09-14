var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  let sum = 0;
  sum = this.nums.reduce((prev, curr) => prev + curr);
  return sum;
};

ArrayWrapper.prototype.toString = function () {
  const string = `[${this.nums}]`;
  return string;
};
