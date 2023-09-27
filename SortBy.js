var sortBy = function (arr, fn) {
  //Check the difference between two fn() values and elements with higher values are placed after the elements with lower fn() values.
  return arr.sort((a, b) => fn(a) - fn(b));
};

// arr = [4, 3, 12, 4, 12, 31];

// fn = (x) => x;

// console.log(sortBy(arr, fn));
