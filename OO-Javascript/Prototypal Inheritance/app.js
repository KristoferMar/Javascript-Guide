// Object.prototype
// Person.prototype

// Person Constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birtday = new Date(job);
    this.calcuateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

// Calculate age
Person.prototype.calcuateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Get full name - protorype method
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Gets Married 
Person.prototype.getsMaried = function(newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '9-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

// Changes her name with prototype.
mary.getsMaried('Smidth');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName')); // We can use property as following.
