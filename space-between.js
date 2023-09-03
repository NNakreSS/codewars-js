// solution 1
function solution(s) {
    const upperRegex = /[A-Z]/g
    const upperCaseWords = s.match(upperRegex);
    if (upperCaseWords == null) return s;
    var newString = s;
    upperCaseWords.forEach(word => newString = newString.replace(new RegExp(word, 'g'), ' ' + word));
    return newString.replace(new RegExp("  ", 'g'), " ");
}

// solution 2
const solution2 = string => string.replace(/[A-Z]/g, ' $&');



console.log(solution2('differentSayHandHand'))
console.log(solution2('small'))
console.log(solution2(''))