Array.prototype.snail = function (rowsCount, colsCount) {
  let arr = this;
  if (rowsCount * colsCount !== arr.length) return [];
  let result = Array(rowsCount)
    .fill()
    .map(() => []);

  let rowStart = 0,
    colStart = 0;
  let index = 0;

  while (rowStart <= rowsCount && colStart < colsCount) {
    if (colStart % 2 != 0) {
      //go up
      result[rowStart][colStart] = arr[index++];
      if (rowStart === 0) {
        colStart++;
        continue;
      } else {
        rowStart--;
      }
    } else {
      //go down
      result[rowStart][colStart] = arr[index++];
      if (rowStart === rowsCount - 1) {
        colStart++;
        continue;
      } else {
        rowStart++;
      }
    }
  }

  return result;
};

// const arr = [
//   19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
// ];

// console.log(arr.snail(5, 4));
