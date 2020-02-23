// Good for one instance
const brad = {
    name: 'Brad',
    age: 30
}
console.log(brad);


// Person constructor - This is good becuase we can create more instances of persons
function Person(name, age, dob) {
    // .this in a function is set to function scope.
    this.name = name;
    this.age = age;
    this.birthday = new Date(dob)
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const brad = new Person('Brad', 20, '9-10-1991');
const john = new Person('John', 30);

console.log(brad.calculateAge());