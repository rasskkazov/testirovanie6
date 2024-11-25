const Calculator = require("./calc");
const calc = new Calculator();

describe("Калькулятор", () => {
  // Сложение
  test("Сложение: возвращает корректную сумму двух чисел", () => {
    expect(calc.add(3, 2)).toBe(5);
  });

  test("Сложение: выбрасывает ошибку при передаче некорректных данных", () => {
    expect(() => calc.add("a", 2)).toThrow();
    expect(() => calc.add(3, null)).toThrow();
  });

  // Вычитание
  test("Вычитание: возвращает корректную разность двух чисел", () => {
    expect(calc.subtract(10, 5)).toBe(5);
  });

  test("Вычитание: выбрасывает ошибку при передаче некорректных данных", () => {
    expect(() => calc.subtract(undefined, 5)).toThrow();
  });

  // Умножение
  test("Умножение: возвращает корректное произведение двух чисел", () => {
    expect(calc.multiply(4, 5)).toBe(20);
  });

  test("Умножение: выбрасывает ошибку при передаче строк вместо чисел", () => {
    expect(() => calc.multiply("4", "5")).toThrow();
  });

  // Деление
  test("Деление: возвращает корректный результат деления", () => {
    expect(calc.divide(10, 2)).toBe(5);
  });

  test("Деление: выбрасывает ошибку при делении на ноль", () => {
    expect(() => calc.divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("Деление: выбрасывает ошибку при некорректных входных данных", () => {
    expect(() => calc.divide("10", null)).toThrow();
  });

  // Процент
  test("Процент: возвращает корректный процент от числа", () => {
    expect(calc.percentage(200, 10)).toBe(20);
  });

  test("Процент: выбрасывает ошибку при передаче некорректных данных", () => {
    expect(() => calc.percentage("200", "10")).toThrow();
  });

  // Возведение в степень
  test("Степень: возвращает корректный результат возведения в степень", () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test("Степень: выбрасывает ошибку при некорректных данных", () => {
    expect(() => calc.power("2", [])).toThrow();
  });

  // Логарифм
  test("Логарифм: возвращает корректный результат логарифма по основанию", () => {
    expect(calc.logarithm(8, 2)).toBeCloseTo(3);
  });

  test("Логарифм: выбрасывает ошибку при делении на логарифм основания равного 1", () => {
    expect(() => calc.logarithm(8, 1)).toThrow();
  });

  test("Логарифм: выбрасывает ошибку при отрицательных числах", () => {
    expect(() => calc.logarithm(-8, 2)).toThrow();
  });

  // Факториал
  test("Факториал: возвращает корректный факториал числа", () => {
    expect(calc.factorial(5)).toBe(120);
  });

  test("Факториал: возвращает 1 для 0", () => {
    expect(calc.factorial(0)).toBe(1);
  });

  test("Факториал: выбрасывает ошибку для отрицательного числа", () => {
    expect(() => calc.factorial(-3)).toThrow("Invalid input for factorial"); // Негативный сценарий
  });

  test("Факториал: выбрасывает ошибку для некорректных данных", () => {
    expect(() => calc.factorial("3")).toThrow();
  });
});
