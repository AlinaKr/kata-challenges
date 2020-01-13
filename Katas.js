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


// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

const createPhoneNumber = numbers => {
    return numbers.reduce((p, c) => p.replace('x', c), "(xxx) xxx-xxxx");
}


// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true  
// isSquare(26) returns  false

const isSquare = n => Number.isInteger(Math.sqrt(n));


// Task
//  	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  	1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

const wave = str =>
    [...str]
        .map((char, indx) => `${str.slice(0, indx)}${char.toUpperCase()}${str.slice(indx + 1, str.length)}`)
        .filter(s => /[A-Z]/.test(s))


// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example:
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4      and 4 has only one digit
//  persistence(4) === 0 // because 4 is already a one-digit number

const persistence = (num, count = 0) => {
    if (num < 10) return count;
    return persistence([...String(num)].reduce((acc, val) => +acc * val), ++count);
}


// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in 
// this way until a single-digit number is produced. This is only applicable to the natural numbers.
// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

const digital_root = n => {
    return n < 10
        ? n
        : digital_root([...String(n)].reduce((acc, val) => Number(acc) + Number(val)))
}
