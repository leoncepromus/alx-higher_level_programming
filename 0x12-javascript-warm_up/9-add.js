#!/usr/bin/node
const add = (a, b) => {
    return a + b;
};

const firstInteger = parseInt(process.argv[2]);
const secondInteger = parseInt(process.argv[3]);

if (isNaN(firstInteger) || isNaN(secondInteger)) {
    console.log("Missing or invalid integers");
} else {
    const result = add(firstInteger, secondInteger);
    console.log(`The addition of ${firstInteger} and ${secondInteger} is: ${result}`);
}
