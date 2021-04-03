// Question 6)

var count = (function () {
    var counter = 0;

    function add() {
        counter += 1;
    }

    function reset() {
        counter = 0;
    }

    return {
        count: function () {
            return counter;
        }, add: function () {
            add();
        }, reset: function () {
            reset();
        }
    }
})();

//    Question 8)

var count = (function () {
    var counter = 0;

    function add() {
        counter++;
    }

    function makeAdder(inc) {
        return function add() {
            counter += inc;
        }
    }

    function reset() {
        counter = 0;
    }

    return {
        counter: function () {
            return counter;
        }, add: function () {
            add();
        },
        makeAdder: function (x) {
            return makeAdder(x);
        },
        reset: function () {
            reset();
        }
    }
})();

//    Question 10)

const employee = (function () {
    var name;
    var age;
    var salary;

    // name setter and getter
    function getName() {
        return name;
    }

    function setName(newName) {
        name = newName;
    }

    // Age setter and getter
    function getAge() {
        return age;
    }

    function setAge(newAge) {
        age = newAge;
    }

    function incrementAge() {
        const newAge = getAge() + 1;
        setAge(newAge);
    }

    // Salary setter and getter
    function getSalary() {
        return salary;
    }

    function setSalary(newSalary) {
        salary = newSalary;
    }

    function increaseSalary(percentage) {
        const newSalary = getSalary() * (1 + (percentage / 100));
        setSalary(newSalary);
    }

    return {
        getName: function () {
            return getName();
        },
        setName: function (newName) {
            setName(newName);
        },
        getAge: function () {
            return getAge();
        },
        setAge: function (newAge) {
            setAge(newAge);
        },
        incrementAge: function () {
            incrementAge();
        },
        getSalary: function () {
            return getSalary()
        },
        setSalary: function (newSalary) {
            setSalary(newSalary);
        },
        increaseSalary: function (percentage) {
            increaseSalary(percentage);
        }
    }
})();

// Question 11)

const employee = (function () {
    var name;
    var age;
    var salary;
    var address;

    // name setter and getter
    function getName() {
        return name;
    }

    function setName(newName) {
        name = newName;
    }

    // Age setter and getter
    function getAge() {
        return age;
    }

    function setAge(newAge) {
        age = newAge;
    }

    function incrementAge() {
        const newAge = getAge() + 1;
        setAge(newAge);
    }

    // Salary setter and getter
    function getSalary() {
        return salary;
    }

    function setSalary(newSalary) {
        salary = newSalary;
    }

    function increaseSalary(percentage) {
        const newSalary = getSalary() * (1 + (percentage / 100));
        setSalary(newSalary);
    }

    // name setter and getter
    function getAddress() {
        return address;
    }

    function setAddress(newAddress) {
        address = newAddress;
    }


    return {
        getName: function () {
            return getName();
        },
        setName: function (newName) {
            setName(newName);
        },
        getAge: function () {
            return getAge();
        },
        setAge: function (newAge) {
            setAge(newAge);
        },
        incrementAge: function () {
            incrementAge();
        },
        getSalary: function () {
            return getSalary()
        },
        setSalary: function (newSalary) {
            setSalary(newSalary);
        },
        increaseSalary: function (percentage) {
            increaseSalary(percentage);
        },
        getAddress: function () {
            return getAddress();
        },
        setAddress: function (newAddress) {
            setAddress(newAddress);
        }
    }
})();

employee.setName("Carlos Selamtaw");
employee.setAge(26);
employee.setSalary(120000);

console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());

employee.incrementAge();
employee.increaseSalary(25);
employee.setAddress("FairField, IA");
console.log(employee.getAddress());
console.log(employee.getAge());
console.log(employee.getSalary());