#!/usr/bin/node
const findSecondLargest = (args) => {
    const integers = args.map(Number).filter(num => !isNaN(num));

    if (integers.length <= 1) {
        return 0;
    }

    const sortedIntegers = integers.sort((a, b) => b - a);

    return sortedIntegers[1];
};

const inputArguments = process.argv.slice(2);

const secondLargest = findSecondLargest(inputArguments);

console.log(secondLargest);
