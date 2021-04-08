/* Week 2 Day 3 - Lab Assignment 10*/
/*Carlos Gebru - #612420*/

export class Person{
    constructor(name) {
        this.setName(name);
    }
    name = "";
    dateOfBirth = null;

    // name getter and setter
    getName(){
        return this.name;
    }
    setName(value){
        this.name = value;
    }

    // dateOfBirth setter and getter
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    setDateOfBirth(value){
        this.dateOfBirth = value;
    }

    toString(){
        const dobFormatted = `${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}`;
        return `Name: ${this.name}, DateOfBirth: ${dobFormatted}`;
    }

}