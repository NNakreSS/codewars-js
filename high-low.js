
// solution 1
function highAndLow(numbers) {
    const numbersArray = getNumbersToString(numbers)
    console.log(numbersArray)
    const high = Math.max(...numbersArray)
    const low = Math.min(...numbersArray)
    return (high + " " + low)
}

function getNumbersToString(stringNumbers) {
    const stNumbers = stringNumbers.split(" ")
    let numbers = []
    for (let i = 0; i < stNumbers.length; i++) {
        const int = Number(stNumbers[i])
        if (!isNaN(int)) numbers.push(int);
    }
    return numbers
}

    console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
    console.log(highAndLow("1 2 3"))

// solution 2 

function highAndLow2(numbers) {
    const numbersArray = numbers.split(" ")
    return (`${Math.max(...numbersArray)} ${Math.min(...numbersArray)}`)
}

    console.log(highAndLow2("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
    console.log(highAndLow2("1 2 3"))

