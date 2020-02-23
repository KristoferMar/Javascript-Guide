const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

// Takes in prototypes
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

// Another syntax for Object.create
const brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Mar'},
    age: {value: 36},
})

console.log(brad);

// Greeting brad
console.log(brad.greeting());