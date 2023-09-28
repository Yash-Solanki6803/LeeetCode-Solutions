class Calculator {
  constructor(operand) {
    this.value = operand;
  }

  add(operand) {
    this.value += operand;
    return this;
  }

  subtract(operand) {
    this.value -= operand;
    return this;
  }

  multiply(operand) {
    this.value *= operand;
    return this;
  }

  divide(operand) {
    if (operand == 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.value /= operand;
    return this;
  }

  power(operand) {
    this.value = this.value ** operand;
    return this;
  }

  getResult() {
    return this.value;
  }
}

let c = new Calculator(10);

console.log(c.add(5).subtract(3).divide(0).getResult());
