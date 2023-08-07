var addTwoPromises = async function(promise1, promise2) {
    const arg1 = await promise1;
    const arg2 = await promise2;

  

    return arg1+arg2;
};


  // addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  //   .then(console.log); // 4
 