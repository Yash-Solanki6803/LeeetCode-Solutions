/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let ans = [];
    let size = functions.length;
    functions.forEach((func, i) => {
      func()
        .then((res) => {
          ans[i] = res;
          //Check if the all functions are executed by checking the size of "functions"
          if (--size === 0) {
            //If all functions are executed then resolve the promise with our array
            resolve(ans);
          }
        })
        .catch(reject);
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
