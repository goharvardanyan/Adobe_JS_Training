// Problem 1

function findLargerNumbers(array, number) {
    let newArray = array.filter(el => el > number);
    return newArray.length === 0 ? "Such values do not exist." : newArray;  
}


// Problem 2

function foo (number1, number2) {
    let arr = [];
    if (number1 % 2 !== 0) {
        number1++;
    }
    for (let i = number1; i <= number2; i += 2) {
        if (check(i)) {
            arr.push(i);
        }
    }
    return arr.length === 0 ? "Such numbers do not exist." : arr.join();
}
 
function check(number) {
    while(number >= 1) {
        if (!((number % 10) % 2 === 0)) {
            return false;
        }
        number = Math.floor(number / 10);
    }
    return true;
}

// Problem 3

function AllNumbersAreOdd(number) {
    if ((number % 10) % 2 !== 0) {
        if (Math.floor(Math.abs(number / 10)) >= 1) {
            return AllNumbersAreOdd(Math.floor(Math.abs(number / 10)));
        }
        return true;
    }
    return false;
}


// Problem 4
function minPositiveNumber(array, minPosNumber = +Infinity, count = 0) {
    if (array.length === 0) {
        if (minPosNumber === +Infinity) {
            return -1;
        }
        return minPosNumber;
    }
    if (array[count] >= 0 && minPosNumber > array[0]) {
        minPosNumber = array[count];
    }
    count++;
    return minPositiveNumber(array.slice(1), minPosNumber);
}


// Problem 5
function tree(array, root = null, newObject = {}) {
    let arr = array.filter(el => el.parent == root);
    if (arr.length === 0) {
        return {};
    }
    for (let i = 0; i < arr.length; i++) {
            newObject[arr[i].id] = {};
            tree(array, arr[i].id, newObject[arr[i].id]);
    }
    return newObject; 
}

let array1 = [
    {parent: 0, id:1},
    {parent: null, id:0},
    {parent: 1, id:4},
    {parent: 0, id:2},
    {parent: 4, id:6},
    {parent: 1, id:3},
    {parent: 2, id:5}
    
]

console.log(tree(array1));



console.log(findLargerNumbers([10, 25, 16, -5, 30, 15, 24] , 16));

console.log(foo(99,350));

console.log (AllNumbersAreOdd(1133133));
console.log(AllNumbersAreOdd(-367));

console.log(minPositiveNumber([56, -9, 87, -23, 0, -105, 55, 1]));