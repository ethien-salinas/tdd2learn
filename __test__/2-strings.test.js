const { isEmptyStr, wordsCount } = require("../src/2-strings")
const { speechHeadline, speechBody, speechClosingParagraph, speechGreeting } = require("./data/greta-speech")

test('checks if a string is empty', () => {
    expect(isEmptyStr(speechHeadline)).not.toBe(true)
    expect(isEmptyStr(speechBody)).toBe(false)
    expect(isEmptyStr(speechClosingParagraph)).toBeFalsy()
    expect(isEmptyStr(speechGreeting)).not.toBeTruthy()
})

test('checks if a string is empty for special cases', () => {
    expect(isEmptyStr(NaN)).toBe(false)
    expect(isEmptyStr(Infinity)).toBeFalsy()
    expect(isEmptyStr(null)).toBeFalsy()
    expect(isEmptyStr(undefined)).toBe(false)
    expect(isEmptyStr('')).toBeTruthy()
    expect(isEmptyStr("")).toBeTruthy()
    expect(isEmptyStr(``)).toBeTruthy()
})

test('checks if the word counter works', () => {
    expect(wordsCount(speechHeadline)).toBe(8)
    expect(wordsCount(speechGreeting)).toBe(2)
    expect(wordsCount(speechHeadline)).not.toBeFalsy()
    expect(wordsCount(speechHeadline)).toBeTruthy()
})

test('checks if the word counter works for special cases', () => {
    expect(wordsCount('')).toBeTruthy()
    expect(wordsCount(null)).toBe(undefined)
    expect(wordsCount(undefined)).toBe(undefined)
    expect(wordsCount(NaN)).toBe(undefined)
    expect(wordsCount(Infinity)).toBe(undefined)
})
