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

// console.log("problem 4: sum and multiply");
// console.log("sum");
// console.log(sum([1,2,3,4]));
// console.log(multiply([2,3,4]));

/*problem 5: reverse string*/
function reverseString(str){
    let reversed = "";
    for(let i = str.length -1; i >= 0;i--){
        reversed = reversed.concat(str[i]);
    }
    return reversed;
}

// console.log("problem 5: string reverse");
// console.log(reverseString("jag testar"));


// problem 6 : longest word
function findLongestWord(words) {
    let longestWord = words[0];

    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length)
            longestWord = words[i];
    }
    return longestWord;
}

// console.log("problem 6: longest word");
// console.log(findLongestWord(["carlos", "selamtaw", "gebru"]));

// problem 7 : filter long words
function filterLongWords(words, length) {
    let longWords = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].length > length)
            longWords.push(words[i]);
    }
    return longWords
}

// console.log("problem 7: filter long words");
// console.log(filterLongWords(["carl", "sol", "john", "selamtaw"], 3));


//problem 8 : compute sum of squares
function computeSumOfSquares(arr) {
    return arr.map(value => Math.pow(value, 2));
}

// console.log("problem 8: compute sum of squares");
// console.log(computeSumOfSquares([2,3,4]));
//

// problem 9: print odd numbers only
function printOddNumbersOnly(nums){
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 !== 0)
            console.log(nums[i]);
    }
}

// console.log("problem 9: odd numbers ");
// printOddNumbersOnly([1,2,3,4,5,6]);

/*problem 10 : compute sum of squares of evens only*/
function computeSumOfSquareOfEvensOnly(nums){
    let computed = 0;

    for(let i = 0; i < nums.length; i++){
        let x = nums[i];

        if(x % 2 === 0)
        {
            computed += Math.pow(x, 2);
        }
    }

    return computed;
}

console.log("problem 10: compute sum of square of evens only");
console.log(computeSumOfSquareOfEvensOnly([1,2,3,4,5]));