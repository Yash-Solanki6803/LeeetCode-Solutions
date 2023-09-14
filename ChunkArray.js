var chunk = function (arr, size) {
  let chunks = Math.ceil(arr.length / size);

  console.log(chunks);
  let index = 0;
  let result = Array(chunks)
    .fill()
    .map(() => {
      const bundle = [];
      for (let i = 0; i < size; i++) {
        if (arr[index] !== undefined) bundle.push(arr[index++]);
      }
      return bundle;
    });

  return result;
};

const arr = [1, 2, 3, 4, 5];
const size = 1;

console.log(chunk(arr, 2));
