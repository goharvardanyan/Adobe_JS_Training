 //Task 1

 function flatten(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            newArr = newArr.concat(flatten(array[i]));
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
 }

 console.log(flatten([14, [1, [[[3, []]], 1], 0]]));

 //Task 2

 function sumOfDigits(number) {
    if (!Math.floor(number / 10)) {
        return number;
    }
    let sum = 0;
    while (number != 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sumOfDigits(sum);
 }

 console.log(sumOfDigits(152));

 // Task 3

 function invertObject(object) {

    let newObj = {}; 
    for (let [key, value] of Object.entries(object)) {
        if (newObj[value] === undefined) {
            newObj[value] = key;
        } else if (Array.isArray(newObj[value])) {
            newObj[value].push(key);
        } else {
            let arr = [newObj[value]];
            arr.push(key);
            newObj[value] = arr;
        }
    }
    return newObj;
 }

 console.log(invertObject({ a: '1', b: '2', c: '2', d: '2'}));


 // Task 4

 function outputStringsWithNLength(string, n) {
     for (let i = 0; i <= string.length - n; i++) {
         console.log(string.substring(i, i + n));
     }
 }

 outputStringsWithNLength('abcdfghz', 7);

 // Task 5

 function countOfMissingNumbers(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);
    return max - min + 1 - array.length;
 }

 console.log(countOfMissingNumbers([3,2,7,6,0,15]));


 // Task 6

function subArrays(array, n) {
    let expectedLength = factorial(array.length) / (factorial(n) * factorial(array.length - n));
    let resultArr = [];
    let tempArr = new Array(n);
    for (let i = 0; i < n; i++) {
        tempArr[i] = i;
    }

    for (let i = 0; i < expectedLength; i++) {
        let subArray = [];
        for (let j = 0; j < n; j++) {
            subArray.push(array[tempArr[j]]);
        }
        resultArr.push(subArray);

        for (let j = n - 1; j >= 0; j--) {
            if (tempArr[j + 1] && tempArr[j] + 1 < tempArr[j + 1] || !(tempArr[j + 1]) && tempArr[j] + 1 < array.length) {
               tempArr[j] = tempArr[j] + 1;
                for (let k = j + 1; k < tempArr.length; k++) {
                    tempArr[k] = tempArr[k - 1] + 1;
                }
                break;
            }
        }
        
    }
    return resultArr;
}

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


console.log(subArrays([1, 2, 3, 4, 5, 6], 4));