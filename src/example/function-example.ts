// Function Declaration:

function add(a: number, b: number): number {
  return a + b;
}

// Function Expression:
const subtract = function(a: number, b: number): number {
  return a - b;
}

// Arrow Function Expression:
const multiply = (a: number, b: number): number => {
  return a * b;
}

// Arrow Function Expression (Shorter Syntax for Single Expression):
const divide = (a: number, b: number): number => a / b;


// Method within an Object Literal:
const calculator = {
  add: function(a: number, b: number): number {
    return a + b;
  },
  subtract(a: number, b: number): number {
    return a - b;
  }
}

// Method within a Class:
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}