#!/usr/bin/node
const args = process.argv.slice(2);
const firstArgument = args[0];

const convertedNumber = parseInt(firstArgument);

if (!isNaN(convertedNumber)) {
    console.log(`My number: ${convertedNumber}`);
} else {
    console.log("Not a number");
}
