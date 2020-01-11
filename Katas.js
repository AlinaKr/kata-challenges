// Disallowed functionality:

// Strings
// Numbers
// Regular Expressions
// Functions named "Hello", "World", "HelloWorld" or anything similar.
// Object keys named "Hello", "World", "HelloWorld" or anything similar.
// Without using the above, output the string "Hello World!" to prove that there is always a way.

const helloWorld = () => {
    const one = Number(true)
    const three = one + one + one
    const thirtythree = String(three) + three

    const exclamation = String.fromCharCode(thirtythree)
    const space = String.fromCharCode(thirtythree - one)

    const [, , , , , , H] = [].forEach.name.toUpperCase()
    const [e] = [].every.name.toLowerCase()
    const [l] = [].lastIndexOf.name
    const [, o] = [].pop.name
    const [, , , , W] = [].copyWithin.name
    const [, , r] = [].forEach.name
    const [, , d] = [].indexOf.name

    return H + e + l + l + o + space + W + o + r + l + d + exclamation;
}


// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

const descendingOrder = (n) => {
    return Number(("" + n).split("").sort((a, b) => { return b - a }).join(""));
}