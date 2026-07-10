const { add, subtract, multiply, divide } = require('../src/math');

describe('Math Utilities', () => {
  test('add returns the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('subtract returns the difference', () => {
    expect(subtract(10, 4)).toBe(6);
    expect(subtract(0, 5)).toBe(-5);
  });

  test('multiply returns the product', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
    expect(multiply(0, 100)).toBe(0);
  });

  test('divide returns the quotient', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(7, 2)).toBe(3.5);
  });

  test('divide throws on zero divisor', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
  });
});
