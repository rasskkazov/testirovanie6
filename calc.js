class Calculator {
  add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Invalid input");
    }
    return x + y;
  }

  subtract(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Invalid input");
    }
    return x - y;
  }

  multiply(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Invalid input");
    }
    return x * y;
  }

  divide(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Invalid input");
    }
    if (y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return x / y;
  }

  percentage(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Invalid input");
    }
    return x * (y / 100);
  }

  power(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Invalid input");
    }
    return x ** y;
  }

  logarithm(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Invalid input");
    }

    if (x <= 0 || y <= 0) {
      throw new Error("Invalid input");
    }

    if (y === 1) {
      throw new Error("Cannot calculate logarithm with base 1");
    }

    return Math.log(x) / Math.log(y);
  }

  factorial(x) {
    if (typeof x !== "number") throw new Error("Invalid input for factorial");
    if (x < 0) throw new Error("Invalid input for factorial");

    return x > 1 ? x * this.factorial(x - 1) : 1;
  }
}

module.exports = Calculator;
