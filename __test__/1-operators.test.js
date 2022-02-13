const { addOne, add, pow, isEven } = require("../src/1-operators");

test('adds one to a given number', () => {
    expect(addOne(3)).toBe(4)
    expect(addOne(0)).not.toBe(0)
    expect(addOne(-3)).toBe(-2)
})

test('adds all the given numbers', () => {
    // positives
    expect(add(3, 2, 1)).toBe(6)
    expect(add(4, 3, 2, 1)).toBe(10)
    expect(add(5, 4, 3, 2, 1)).toBe(15)
    // negatives
    expect(add(-3, 5, 4, 3, 2, 1)).not.toBe(9)
    expect(add(-3, 5, 4, 3, 2, 1)).toBe(12)
})

test('exponentation', () => {
    // positives
    expect(pow(3, 2)).not.toBe(-9)
    expect(pow(3, 2)).toBe(9)
    // negatives
    expect(pow(3, -2)).not.toBe(9)
    expect(pow(3, -2)).not.toBe(-9)
    expect(pow(3, -2)).toBeCloseTo(0.111)
    // NaN
    expect(pow('Rich', 2)).not.toBe(undefined)
    expect(pow('Rich', 2)).toBeNaN()
})

test('check if a value is even or odd', () => {
    // positives
    expect(isEven(3)).toBeFalsy()
    expect(isEven(6)).toBeTruthy()
    // negatives
    expect(isEven(-3)).toBeFalsy()
    expect(isEven(-6)).toBeTruthy()
    // zero
    expect(isEven(0)).not.toBeFalsy()
    expect(isEven(0)).toBeTruthy()
    // Strings
    expect(isEven('😎')).toBeFalsy()  // TODO: refactor, this is not a number
    expect(isEven('Rich')).toBeFalsy()
    expect(isEven(' ')).toBeTruthy()
    // NaN
    expect(isEven(NaN)).toBeFalsy()
    expect(isEven(undefined)).toBeFalsy() // TODO: refactor, this is not a number
    expect(isEven(null)).not.toBeFalsy() // TODO: refactor, this is not a number
})