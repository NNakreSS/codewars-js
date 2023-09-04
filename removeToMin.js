// solution 1
function removeSmallest(numbers) {
    const min = Math.min(...numbers);
    const array = [...numbers]
    array.splice(array.indexOf(min), 1)
    return array
}

// solution 2
const removeSmallest2 = numbers => numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));

console.log(removeSmallest([1, 2, 3, 4, 5]))