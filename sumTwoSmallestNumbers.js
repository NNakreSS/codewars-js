// solution 1
function sumTwoSmallestNumbers(numbers) {
    const min1 = Math.min(...numbers)
    numbers.splice(numbers.indexOf(min1), 1)
    const min2 = Math.min(...numbers)
    return min1 + min2
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

// solution 1
function sumTwoSmallestNumbers2(numbers) {
    return (numbers.sort((a, b) => a - b)).slice(0, 2).reduce((a, b) => a + b);
}

const array = [5, 8, 12, 19, 22]
console.log(array)

console.log(sumTwoSmallestNumbers2(array))