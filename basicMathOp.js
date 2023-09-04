// solution 1
const basicOp = (op, num1, num2) => eval(num1 + op + num2);

// solution 2
function basicOp2(op, num1, num2) {
    switch (op) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            throw new Error('Invalid math operator : ' + op);
    };
}

console.log(basicOp2('*', 4, 7))