class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()- 1970);
    }

    getMarried(newLastName) {
        this.lastName = newLastName;
    }

    // Stack method
    static addNumbers(x,y){
        return x + y;
    }
}

// Create an object from the class.
const mary = new Person('Mary', 'William', '11-12-1980');

mary.getMarried('Thompson');

// We execute method from the class.
console.log(mary.greeting());

// An example of how to use a static method.
// For standalone funtions.
console.log(Person.addNumbers(1,2));
