/* Week 2 Day 3 - Lab Assignment*/
/*Carlos Gebru - #612420*/

"use strict"

// problem 1
const person = {
    name: "",
    dateOfBirth: null,
    getName: function () {
        return this.name;
    },
    setName: function (newName) {
        this.name = newName;
    },
    toString: function () {
        const birthDateFormatted = `${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1 }-${this.dateOfBirth.getDate()}`;
        return `The person's name is ${this.name}\n${this.name} was born on ${birthDateFormatted}`;
    }
};

let john = Object.create(person);
john.setName("John");

john.dateOfBirth = new Date(1998, 11,10);
console.log(john.toString());

// problem 2
