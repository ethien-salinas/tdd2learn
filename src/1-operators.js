/* *** *** *** Arithmetic Operators
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
/	Division
**	Exponentiation (ES2016)
%	Modulus (Division Remainder)
++	Increment
--	Decrement
*** *** *** */

// *** addition ***
const addOne = (n) => {
    return n + 1
}
const add = (...n) => {
    sum = 0
    n.forEach(e => {
        sum = sum + e
    });
    return sum
}

// exponentiation
const pow = (base, pow) => {
    return base ** pow
}

// even or odd
const isEven = (n) => {
    return n % 2 === 0
}

module.exports = { add, addOne, pow, isEven }