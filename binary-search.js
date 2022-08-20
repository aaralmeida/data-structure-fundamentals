function binarySearchRecursive(arraySorted, start, end, searchNumber) {
    if (start > end) { return 'Number Not found in Array' }
    let mid = parseInt((start + end) / 2)
    if (searchNumber == arraySorted[mid]) {
        return 'mid searched ' + mid + ' number ' + arraySorted[mid]
    } else if (searchNumber < arraySorted[mid]) {
        return binarySearchRecursive(arraySorted, start, (mid - 1), searchNumber)
    } else {
        return binarySearchRecursive(arraySorted, (mid + 1), end, searchNumber)
    }
}

function firstOcurrencyArray(arraySorted, searchNumber) {
    let start = 0;
    let end = arraySorted.length
    let firstOcurrency
    while (start <= end) {
        let mid = parseInt((start + end) / 2)
        if (searchNumber == arraySorted[mid]) {
            firstOcurrency = mid
            end = mid - 1
        } else if (searchNumber < arraySorted[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return firstOcurrency
}

function findLastOcurrencyElement(arraySorted, searchNumber) {
    let start = 0;
    let end = arraySorted.length
    let firstOcurrency
    while (start <= end) {
        let mid = parseInt((start + end) / 2)
        if (searchNumber == arraySorted[mid]) {
            firstOcurrency = mid
            start = mid + 1
        } else if (searchNumber < arraySorted[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return firstOcurrency
}

function findRotationCount(array) {
    let arraySize = array.length
    let start = 0
    let end = arraySize - 1

    while (start <= end) {
        if (array[start] <= array[end]) {
            return start
        }
    }
}

function elementCounteInSortedArray(repeatedArraySorted, element) {
    let firstOcurrency = firstOcurrencyArray(repeatedArraySorted, element)
    let lastOcurrency = findLastOcurrencyElement(repeatedArraySorted, element)
    console.log('firstOcurrency ' + firstOcurrency);
    console.log('lastOcurrency ' + lastOcurrency);
    return (lastOcurrency - firstOcurrency) + 1
}


let arraySorted = [2, 3, 10, 10, 10, 7, 8, 9];

let repeatedArraySorted = [1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7]

console.log(elementCounteInSortedArray(repeatedArraySorted, 1));