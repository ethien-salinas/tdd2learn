const { isEmptyArr, arrContains, getSumOfProp } = require("../src/3-arrays")
const { numArr, strArr, booleanArr, weirdTypesArr, arrOfArr, objArr } = require("./data/my-arrays")

test('checks if an array is empty', () => {
    expect(isEmptyArr([])).toBe(true)
    expect(isEmptyArr(numArr)).toBe(false)
    expect(isEmptyArr(strArr)).toBe(false)
    expect(isEmptyArr(booleanArr)).toBeFalsy()
    expect(isEmptyArr(weirdTypesArr)).not.toBeTruthy()
    expect(isEmptyArr(arrOfArr)).toBe(false)
    expect(isEmptyArr(objArr)).toBe(false)
})

test('check if a non-array is empty', () => {
    expect(isEmptyArr('')).toBe(undefined)
    expect(isEmptyArr(null)).toBeUndefined()
    expect(isEmptyArr(undefined)).toBeUndefined()
    expect(isEmptyArr(Infinity)).toBeUndefined()
    expect(isEmptyArr(NaN)).toBeUndefined()
})

test('check if an array contains an element', () => {
    expect(arrContains(numArr, 3)).not.toBe(false)
})

test('check if a non-array contains an element', () => {
    expect(arrContains('', '')).toBe(undefined)
    expect(arrContains(null, 3)).toBeUndefined()
    expect(arrContains(undefined, 3)).toBeUndefined()
    expect(arrContains(-Infinity, 3)).toBeUndefined()
    expect(arrContains(NaN, 3)).toBeUndefined()
})

test('get the sum of a property', () => {
    expect(getSumOfProp(objArr, 'price')).toBeCloseTo(19.256)
    expect(getSumOfProp(objArr, 'cost')).toBeNaN()
    expect(getSumOfProp(objArr, '')).toBeNaN()
})

test('get the sum of a property in plain arrays', () => {
    expect(getSumOfProp(numArr, 'cost')).toBeNaN()
    expect(getSumOfProp(strArr, 'cost')).toBeNaN()
    // expect(getSumOfProp(weirdTypesArr, 'cost')).toBeNaN()
})
