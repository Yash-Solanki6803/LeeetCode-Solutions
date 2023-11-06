const arr1 = [
  {
    id: 1,
    x: 23,
    y: 2,
  },
  {
    id: 3,
    x: 3,
  },
];

const arr2 = [
  {
    id: 1,
    x: 3,
  },
  {
    id: 2,
    x: 2,
  },
];

var join = function (arr1, arr2) {
  const map = new Map();

  // 1. Initialize the Map with arr1 items
  arr1.forEach((item) => {
    map.set(item.id, item);
  });

  // 2. Merge arr2 into the Map
  arr2.forEach((item) => {
    if (map.has(item.id)) {
      const existingItem = map.get(item.id);
      // Merge properties from arr2 into the existing item in arr1
      Object.keys(item).forEach((key) => {
        existingItem[key] = item[key];
      });
    } else {
      // If the id doesn't exist in arr1, add it to the Map
      map.set(item.id, item);
    }
  });

  // Convert the Map values back to an array
  const resultArray = Array.from(map.values());

  // Sort the result array by the 'id' property
  resultArray.sort((a, b) => a.id - b.id);

  return resultArray;
};
