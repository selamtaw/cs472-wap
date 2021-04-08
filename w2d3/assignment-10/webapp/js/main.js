/* Week 2 Day 3 - Lab Assignment 10*/
/*Carlos Gebru - #612420*/

"use strict"

import {Person} from "./model/person.js";
import {Employee} from "./model/employee.js";
/*
* Problem 1
*/

const persons = [];
// 1.	Name: Ana Smith, Date of Birth: 1998-12-15
// 2.	Name: Bob Jone, Date of Birth: 1945-11-16
// 3.	Name: Carlos Slim Helu, Date of Birth: 1976-09-24
const ana = new Person("Ana Smith");
ana.setDateOfBirth(new Date(1998,12,15));

const bob = new Person("Bob Jone");
bob.setDateOfBirth(new Date(1945,11,16));

const carlos = new Person("Carlos Slim Helu");
carlos.setDateOfBirth(new Date(1976, 9,24));

persons.push(ana);
persons.push(bob);
persons.push(carlos);

console.log("problem 1: ");
persons.forEach(value => {
    console.log(value.toString());
})


/*
* Problem 2
*/

//In the main.js file, add code to Create an employee named,
// Jim Hanson, set their salary to $245.990.00 and call the doJob() method,
// passing it the jobtitle, Software Engineer.

const jim = new Employee("Jim Hanson");
jim.setSalary(245990.00);
console.log("\nproblem 2: ");
jim.doJob("Software Engineer");
