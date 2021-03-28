"use strict"

// problem 1
function max(x, y) {
    if (x > y) {
        return x
    } else {
        return y;
    }
}

// console.log("problem 1: max");
// console.log(max(1, 3));
// console.log(max(13, 3));

// problem 2
function maxOfThree(x, y, z) {
    if (x >= y && x >= z) {
        return x;

    } else if (y >= x && y >= z) {
        return y;

    } else {
        return z;
    }
}

// console.log("problem 2: max of three");
// console.log(maxOfThree(111,111,9));

// problem 3: isVowel
function isVowel(char) {
    if (char === 'a' || char === "A")
        return true;
    else if (char === 'e' || char === "e")
        return true;
    else if (char === 'i' || char === "I")
        return true;
    else if (char === 'o' || char === "O")
        return true;
    else if (char === 'u' || char === "U")
        return true;
    return false;
}

// console.log("problem 3 : is a char vowel?");
// console.log(isVowel("a"));
// console.log(isVowel("b"));
// console.log(isVowel("I"));

/* problem 4: sum and multiply*/

function sum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

function multiply(arr){
    let total = 1;
    for(let i = 0; i < arr.length; i++){
        total *= arr[i];
    }
    return total;
}

console.log("problem 4: sum and multiply");
console.log("sum");
console.log(sum([1,2,3,4]));
console.log(multiply([2,3,4]));