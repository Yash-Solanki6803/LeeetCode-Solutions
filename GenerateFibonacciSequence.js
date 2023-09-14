var fibGenerator = function* () {
  let term1 = 0;
  let term2 = 1;
  yield 0;
  yield 1;
  while (true) {
    yield term1 + term2;
    [term1, term2] = [term2, term1 + term2];
  }
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0
