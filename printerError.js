const s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"

// solution 1 
function printerError(s) {
    // your code
    const validRange = 'abcdefghijklm'
    let errorCount = 0
    s.split('').forEach(a => validRange.indexOf(a) === -1 ? errorCount++ : null)
    return (`${errorCount}/${s.length}`)
}


// solution 2
function printerError2(s) {
    const regexAM = /[a-m]/gi
    return s.replace(regexAM, "").length + "/" + s.length
}



console.log(printerError2(s));