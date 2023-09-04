// solution 1
const pigIt = (str) => str.split(' ').map((word) => {
    const add = /^[a-zA-Z]+$/.test(word[0]) == true ? 'ay' : '';
    return word.slice(1) + word[0] + add
}).join(' ');

// solution 2 *regex
function pigIt2(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

console.log(pigIt('Pig latin is cool !')) // ('igPay atinlay siay oolcay')