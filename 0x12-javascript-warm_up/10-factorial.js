#!/usr/bin/node
const computeFactorial = (n) => {
    if (isNaN(n)) {
        return 1;
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * computeFactorial(n - 1);
};

const inputNumber = parseInt(process.argv[2]);

const factorialResult = computeFactorial(inputNumber);

console.log(`The factorial of ${inputNumber} is: ${factorialResult}`);
