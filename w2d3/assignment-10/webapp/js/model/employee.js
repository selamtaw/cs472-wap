/* Week 2 Day 3 - Lab Assignment 10*/
/*Carlos Gebru - #612420*/

import {Person} from "./person.js";

export class Employee extends Person{
    constructor(name) {
        super(name);
    }

    salary = 0;
    hireDate = null;

    //salary setter and getter
    getSalary(){
        return this.salary;
    }
    setSalary(value){
        this.salary = value;
    }

    // hireDate setter and getter
    getHireDate(){
        return this.hireDate;
    }
    setHireDate(value){
        this.hireDate = value;
    }

    doJob(jobTitle){
        const salaryFormatted = new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(this.getSalary())
        console.log(`${this.getName()} is a ${jobTitle} who earns ${salaryFormatted}`);
    }

}