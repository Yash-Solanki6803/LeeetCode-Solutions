var createCounter = function(n){
    let value = n;

    return function(){
        return value++;
    }
}

const counter = createCounter(-2);
console.log(counter());
console.log(counter());
console.log(counter());
