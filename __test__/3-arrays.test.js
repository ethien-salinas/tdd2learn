const { isEmptyArr } = require("../src/3-arrays")
const { numArr, strArr, booleanArr, weirdTypesArr, arrOfArr, objArr } = require("./data/my-arrays")

test('checks if an array is empty', () => {
    expect(isEmptyArr(numArr)).toBe(false)
    expect(isEmptyArr(strArr)).toBe(false)
    expect(isEmptyArr(booleanArr)).toBeFalsy()
    expect(isEmptyArr(weirdTypesArr)).not.toBeTruthy()
    expect(isEmptyArr(arrOfArr)).toBe(false)
    expect(isEmptyArr(objArr)).toBe(false)
})