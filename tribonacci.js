// solution 1 
function tribonacci(signature, n) {
    if (n === 0) return [];
    if (n <= 3) return signature.slice(0, n);
    let newArray = signature.slice();
    for (let i = 0; i < n - signature.length; i++) {
        const newItem = newArray[newArray.length - 1] + newArray[newArray.length - 2] + newArray[newArray.length - 3]
        newArray.push(newItem);
    }
    return newArray;
}

// solution 1 
function tribonacci2(signature, n) {
    if (n <= 3) return signature.slice(0, n);
    if (n === 0) return [];
    for (let i = 0; i < n - signature.length; i++) {
        signature.push(signature[i] + signature[i + 1] + signature[i + 2])
    }
    return signature;
}

console.log(tribonacci2([1, 1, 1], 10))
console.log(tribonacci2([0, 0, 1], 10))
console.log(tribonacci([0, 1, 1], 10))
console.log(tribonacci([1, 0, 0], 10))
console.log(tribonacci([0, 0, 0], 10))
console.log(tribonacci([1, 2, 3], 10))
console.log(tribonacci([3, 2, 1], 10))
console.log(tribonacci2([1, 1, 1], 1))