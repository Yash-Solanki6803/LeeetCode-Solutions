let obj = {
  name: "zhangsan",
  age: 18,
  q: 0,
  address: {
    city: "beijing",
    state: null,
    country: "China",
  },
  a: {
    b: {
      c: 1,
      h: 0,
      i: {
        j: {
          k: "lalala",
          l: "hahaha",
          m: {
            n: "enenen",
            o: false,
            p: "",
            q: null,
            r: undefined,
          },
        },
      },
    },
    c: {
      d: null,
      e: false,
      f: {
        g: "haha",
      },
    },
  },
};

//Convert an object into an array of arrays of all possible keys .
function flattenObject(obj) {
  let result = [];
  function helper(obj, arr = []) {
    for (let key in obj) {
      const temp = [...arr, key];
      if (typeof obj[key] === "object") {
        result.push(temp);
        helper(obj[key], temp);
      } else {
        result.push(temp);
      }
    }
  }
  helper(obj);
  return result;
}

const result = flattenObject(obj);
console.log(result);

// Filter out all falsy values from an array of array which contain the keys of the object in the nested order.
function filterFalsyObjectValues(keysArray, obj) {
  return keysArray.filter((keys) => {
    let currentObj = obj;
    for (const key of keys) {
      if (currentObj && typeof currentObj === "object" && key in currentObj) {
        currentObj = currentObj[key];
      } else {
        currentObj = undefined;
        break;
      }
    }

    if (
      currentObj !== undefined &&
      typeof currentObj !== "object" &&
      currentObj
    ) {
      return true;
    }
  });
}

console.log(filterFalsyObjectValues(result, obj));

//Function to add a new key value pair in the object at the correct place in the nested order with is given in form of an array of keys . And the Object is also given as an array of keys .

const inputKeys = [
  {
    nestedKey: ["a", "b", "i", "j", "abd"],
    value: "abc",
  },
  {
    nestedKey: ["a", "b", "i", "j", "xyz"],
    value: "xyz",
  },
  {
    nestedKey: ["a", "b", "i", "j", "l"],
    value: "yayaya",
  },
  {
    nestedKey: ["a", "b", "i", "j", "abc", "aw", "b", "i", "j"],
    value: "Testing deep nesting",
  },
];

//Traverse the given array of objects and add or update the values in the object based on the keys given in the nestedKey array . If the key is not present in the object then add the key value pair in the object at the correct place in the nested order .
function addKeyValuePairs(inputKeys, obj) {
  for (const keyData of inputKeys) {
    const { nestedKey, value } = keyData;
    obj = addNestedValue(obj, nestedKey, value);
  }

  return obj;
}

function addNestedValue(obj, keys, value) {
  if (keys.length === 0) {
    return value; // Reached the target key, update the value
  }

  const [currentKey, ...remainingKeys] = keys;

  if (typeof obj !== "object" || obj === null) {
    obj = {}; // If the current object is not an object, create an empty object
  }

  obj[currentKey] = addNestedValue(obj[currentKey], remainingKeys, value);

  return obj;
}

console.dir(addKeyValuePairs(inputKeys, obj), { depth: null });
