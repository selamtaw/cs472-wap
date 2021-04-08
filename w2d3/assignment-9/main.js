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

const birthDateFormatted = `${john.dateOfBirth.getFullYear()}-${john.dateOfBirth.getMonth()+1 }-${john.dateOfBirth.getDate()}`;
console.log(`The person's name is ${john.name}\n${john.name} was born on ${birthDateFormatted}`)

// problem 2
let employee = {
    salary: 0,
    hireDate: new Date(),
    doJob: function (jobTitle) {
        console.log(`${this.person.getName()} is a Programmer who earns $${this.salary} `);
    }
};

let anna = Object.create(employee);
anna.salary = 249995.50;
anna.person = person;
anna.person.setName("Anna");
anna.doJob("Programmer");


// problem 3
function Person () {
    this.name = "";
    this.dateOfBirth = null;
    this.getName = function () {
        return this.name;
    };
    this.setName =function (newName) {
        this.name = newName;
    };
    this.toString = function () {
        const birthDateFormatted = `${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1 }-${this.dateOfBirth.getDate()}`;
        return `Name: ${this.name} ${this.name} DateOfBirth: ${birthDateFormatted}`;
    };
}

let peter = new Person();
peter.setName("Peter");
peter.dateOfBirth = new Date(1985, 11,10);
console.log(peter.toString());