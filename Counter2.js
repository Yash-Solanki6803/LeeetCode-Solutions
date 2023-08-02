var createCounter = function(init) {
  let counter = init;

  return {
    increment: ()=>{
      return ++counter;
    },
    decrement:()=>{
      return --counter;
    },
    reset:()=>{
      counter = init;
      return counter;
    }
  }
};

const counter = createCounter(5)

console.log(counter.reset())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())