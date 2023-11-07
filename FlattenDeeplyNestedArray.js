// Approach -1

// const flat = function (arr, n) {
//   if (n === 0) {
//     return arr;
//   }

//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (Array.isArray(arr[j])) {
//         const arrIdx = j;
//         j += arr[j].length - 1;
//         replaceElements(arr, arrIdx);
//       }
//     }
//   }

//   function replaceElements(arr, index) {
//     arr.splice(index, 1, ...arr[index]);
//   }

//   return arr;
// };

//Approach -2

var flat = function (arr, n, tempArray = [], currentCycle = 0) {
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index]) && currentCycle < n) {
      flat(arr[index], n, tempArray, currentCycle + 1);
    } else {
      tempArray.push(arr[index]);
    }
  }
  return tempArray;
};

const arr = [
  0,
  1,
  2,
  3,
  [4, 5, 6],
  [7, 8, [9, 10, 11, [1, 2, 1, 2]], 12],
  [13, 14, 15],
];

console.log(flat(arr, 2));
