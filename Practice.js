//Creating the array of object to print

const arr = [
  {
    topic: "Closure",
    time_spent: 30,
    confidence_level: 5,
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

//Function that takes two parameters , Array of Objects and property to print from each object.
function printArrayOfObjects(arr, propertyToPrint) {
  //looping over each object in array
  for (i in arr) {
    //saving current working object in a variable to make things clearer.
    currentObject = arr[i];

    // Creating an array of keys statically
    let keys = Object.keys(currentObject);

    // Log  index of Object.
    console.log(`Currently Displaying key-value pair of Object ${i}`);

    //Looping over each key and printing it with it's value
    keys.forEach((key) => {
      if (!propertyToPrint || key === propertyToPrint) {
        console.log(`${key} : ${currentObject[key]}`);
      }
    });
  }
}

printArrayOfObjects(arr, "topic");
