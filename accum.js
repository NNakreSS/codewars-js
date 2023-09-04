// solution 1 
function accum(s) {
    const array = s.split('')
    let newStr = [];
    array.forEach((w, _i) => {
        for (let i = 0; i < _i + 1; i++) {
            const word = i == 0 ? w.toUpperCase() : w.toLowerCase();
            newStr.push(word);
        }
        if (_i + 1 != array.length) newStr.push('-');
    })
    return newStr.join('');
}

// solution 2
const accum2 = (s) => s.split('').map((w, i) => w.toUpperCase() + w.toLowerCase().repeat(i)).join('-');
console.log(accum2("ZpglnRxqenU"))