const arr = [
  {
    topic: "Closure",
    time_spent: 30,
    confidence_level: {
      canBe: true,
      is: [1, 2, 3],
    },
  },
  {
    topic: "Higher Order Functions",
    time_spent: 25,
    confidence_level: 5,
    feedback: 0,
  },
  {
    topic: "DOM",
    time_spent: 30,
    confidence_level: 5,
    Usage: "A lot",
  },
  {
    topic: "async/await",
    time_spent: 300,
    confidence_level: 5,
    important: true,
  },
];

let levelOfNesting = 0;
const indent = "----";

const printNestedObject = (arr, propertyToPrint) => {
  for (let i = 0; i < arr.length; i++) {
    const currentObject = arr[i];
    const keys = Object.keys(currentObject);
    console.log(`Currently Displaying key-value pair of Object: ${i}`);
    keys.forEach((key) => {
      if (typeof currentObject[key] === "object") {
        console.log("level of nesting increased");
        levelOfNesting++;
        console.log(
          `${key} : ${Array.isArray(currentObject[key]) ? "[" : "{"}`
        );
        if (Array.isArray(currentObject[key])) {
          printArray(currentObject[key]);
        } else {
          printObject(currentObject[key]);
        }
        console.log("level of nesting decreased");
        levelOfNesting--;
      } else {
        console.log(`${key} : ${currentObject[key]}`);
      }
    });
  }
};

function printObject(obj, propertyToPrint) {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (typeof obj[key] === "object") {
      console.log("level of nesting increased");
      levelOfNesting++;
      console.log(
        `${indent.repeat(levelOfNesting)}${key} : ${
          Array.isArray(obj[key]) ? "[" : "{"
        }`
      );
      if (Array.isArray(obj[key])) {
        printArray(obj[key]);
      } else {
        printObject(obj[key]);
      }
      console.log("level of nesting decreased");
      levelOfNesting--;
    } else {
      console.log(`${indent.repeat(levelOfNesting)}${key} : ${obj[key]}`);
    }
  });
}

function printArray(arr) {
  for (i in arr) {
    if (typeof arr[i] === "object") {
      printObject(arr[i]);
    } else {
      console.log(`${indent.repeat(levelOfNesting)}${arr[i]},`);
    }
  }
}

printNestedObject(arr);
