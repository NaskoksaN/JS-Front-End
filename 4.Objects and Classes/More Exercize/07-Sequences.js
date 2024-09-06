function printUniqueSortedArrays(inputArr) {
    const sortDescending = (arr) => arr.sort((a, b) => b - a);

    const arrayToString = (arr) => JSON.stringify(arr.slice().sort((a, b) => a - b));

    const uniqueArrays = new Map(); 
    for (const arrStr of inputArr) {
        const arr = JSON.parse(arrStr);
        const sortedArrayStr = arrayToString(arr);

        if (!uniqueArrays.has(sortedArrayStr)) {
            uniqueArrays.set(sortedArrayStr, arr);
        }
    }

    const sortedUniqueArrays = Array.from(uniqueArrays.values())
        .sort((a, b) => a.length - b.length);

    sortedUniqueArrays.forEach(arr => {
        console.log(`[${sortDescending(arr).join(', ')}]`);
    });
}

// Example usage
const input = ["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
    

printUniqueSortedArrays(input);