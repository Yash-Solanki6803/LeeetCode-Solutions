const x = 2;

// global scope
function outer() {
  //
  //
  //
  //local scope
  //
  //

  let variable1 = 10;
  let var2 = 20;
  //
  if (1) {
    //
    //
    // block Scope
    //
  }
  return function () {
    console.log(variable1);
  };
}

let a = outer();
console.dir(a);
a();
