const isEmptyStr = (strToEval) => {
    return strToEval?.length === 0
}

const wordsCount = (strToEval) => {
    // return strToEval?.trim().split(' ').length
    return typeof strToEval === 'string'
        ? strToEval?.trim().split(' ').length
        : undefined
}

module.exports = {
    isEmptyStr,
    wordsCount
}