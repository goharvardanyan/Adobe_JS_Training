//Task1


function frequencyOfNumbers1(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        if (obj.hasOwnProperty(`${array[i]}`)) {
            obj[`${array[i]}`] = obj[`${array[i]}`] + 1 / array.length;
        } else {
            obj[`${array[i]}`] = 1 / array.length;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]] !== undefined){
            console.log(`${array[i]}: ${obj[array[i]]}`);
            delete obj[array[i]];
        }
        
    }
}

function frequencyOfNumbers2(array) {
    let map = new Map();
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            map.set(array[i], map.get(array[i]) + 1 / array.length); 
        } else {
            map.set(array[i], 1 / array.length);
        }
    }
    for (let [key,value] of map.entries()) {
        console.log(`${key}: ${value}`);
    }
}

function frequencyOfNumbers3(array) {
    let temp = array.slice(0);
    let arr = [];
    temp.sort((a, b) => a - b);
    let count = 1;
    for (let i = 0; i < array.length - 1; i++) {
        if (temp[i] === temp[i + 1]) {
            count++;
        } else {
            arr[array.indexOf(temp[i])] = `${temp[i]}: ${count / array.length}`;
            count = 1;
        }
        if (i === array.length - 2) {
            arr[array.indexOf(temp[i + 1])] = `${temp[i + 1]}: ${count / array.length}`;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            console.log(arr[i]);
        }
    }
}

// Task2


function maxWord(sentence) {
    let max = "";
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence.charAt(i);
        if (ch !== "," && ch !== "-" && ch !== " ") {
            count++;
            if (i === sentence.length - 1) {
                if (count > max.length) {
                    max = sentence.substring(i + 1 - count, i + 1);
                }
            }
        } else {
            if (count > max.length) {
                max = sentence.substring(i - count, i);
            }
            count = 0;
        }
    } 
    return max;
}

// Task3


function longestUniqueSubstring(sentence) {
    let max = "";
    for (let i = 0; i < sentence.length; i++) {
        for (let j = i + 1; j < sentence.length; j++) {
            let str = sentence.substring(i, j);
            if (str.includes(sentence.charAt(j)) && sentence.charAt(j) !== " ") {
                if (str.length >= max.length) {
                    max = str;
                }
                break;
            }
        }
    }
    return max;
}

// Task4

function f4 (string) {
    let arr = [];
    for (let i = 0; i < string.length - 2; i += 3) {
        arr.push(string.charAt(i + 1));
        arr.push(string.charAt(i + 2));
        arr.push(string.charAt(i));
    }
    if (string.length % 3 === 1) {
        arr.push(string.charAt(string.length - 1));
    } else if (string.length % 3 === 2) {
        arr.push(string.slice(string.length - 2));
    }
    console.log(arr.join(""));
}

// Task5

function f5(array) {
    let mult = 1;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
            console.log("Invalid Argument");
            return;
        }
        let negMax = -Infinity;
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] < 0) {
                if (negMax < array[i][j]) {
                    negMax = array[i][j];
                }
            }
        }
        if (negMax !== -Infinity) {
            mult *= negMax;
        } else {
            count++;
        }
    }
    if (count !== array.length) {
        console.log(mult);
    } else {
        console.log("No negatives");
    }
}

// Task6

function f6(array) {
    if (array.length === 1 || array.length === 2) {
        return array;
    }
    let newArr = [];
    let i = 0;
    let j = 1;
    let k = 2;
    while (i !== array.length - 2) {
        while (j !== array.length - 1) {
            while (k !== array.length) {
                let subArr = [i, j, k];
                newArr.push(subArr);
                k++;
            }  
            j++;
            k = j + 1;
        }
        i++;
        j = i + 1;
        k = j + 1;
    }
    return newArr;
}


frequencyOfNumbers1([3,3,2,-2,3,2,7,-8]);
// frequencyOfNumbers2([3,3,2,-2,3,2,7,-8]);
// frequencyOfNumbers3([3,3,2,-2,3,2,7,-8]);

console.log(maxWord("A revolution without dancing is a revolution not worth having."));

console.log(longestUniqueSubstring("parting your soup is not a miracle, bruce."));

f4("aweyoolp");
f5([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]);
f5([[3, 4], [11, 0], [5, 6, 7, 8]]);
f5([1, 2, 3]);
console.log(f6([5, 9, 23, 0, -2, -1]));