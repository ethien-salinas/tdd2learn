const isEmptyArr = (arrToEval) => {
    // return arrToEval?.length === 0
    return Array.isArray(arrToEval)
        ? arrToEval.length === 0
        : undefined
}

const arrContains = (arrToEval, elementToFind) => {
    // return arrToEval.includes(elementToFind)
    return Array.isArray(arrToEval)
        ? arrToEval?.includes(elementToFind)
        : undefined
}

const getSumOfProp = (arrToEval, propToSum) => {
    return arrToEval.map(el => el[propToSum]).reduce((prev, curr) => prev + curr)
    // return arrToEval.map(el => el?.propToSum).reduce((prev, curr) => prev + curr)
    // return Array.isArray(propToSum)
    //     ? arrToEval?.includes(propToSum)
    //     : undefined
}

module.exports = {
    isEmptyArr,
    arrContains,
    getSumOfProp,
}