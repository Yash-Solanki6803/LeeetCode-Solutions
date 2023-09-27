var cancellable = function (fn, args, t) {
  //Adding a simple closure to make sure that the function is only executed only once
  var executeFirstTime = (function () {
    var executed = false;
    return function () {
      if (!executed) {
        executed = true;
        fn(...args);
      }
    };
  })();

  executeFirstTime();

  //Fetching the interval id for the cancellation function.
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  //clearInterval is a builtin function that takes intervalId as argument and clears the interval with that id.
  return function () {
    clearInterval(intervalId);
  };
};

// Un-comment the below section for testing.

// const result = [];

// fn = (x1, x2) => {
//   console.log(`x1,x2`, x1, x2);
//   return x1 * x2;
// };
// const args = [2, 5],
//   t = 30,
//   cancelT = 165;

// const start = performance.now();

// const log = (...argsArr) => {
//   const diff = Math.floor(performance.now() - start);
//   result.push({ time: diff, returned: fn(...argsArr) });
// };

// const cancel = cancellable(log, args, t);

// setTimeout(() => {
//   cancel();
// }, cancelT);

// setTimeout(() => {
//   console.log(result); // [
//   //      {"time":0,"returned":8},
//   //      {"time":35,"returned":8},
//   //      {"time":70,"returned":8},
//   //      {"time":105,"returned":8},
//   //      {"time":140,"returned":8},
//   //      {"time":175,"returned":8}
//   //  ]
// }, cancelT + t + 15);
