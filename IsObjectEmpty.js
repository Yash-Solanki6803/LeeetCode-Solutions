const isEmpty = function (obj) {
  if (typeof obj == "object") {
    return Object.keys(obj).length === 0;
  } else if (Array.isArray(obj)) {
    return obj.length === 0;
  } else {
    console.log("Not an Object");
  }
};

let obj = {};

console.log(isEmpty(1));
