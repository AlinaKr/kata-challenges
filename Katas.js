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