// An object can hold almost everything - example list below.
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@hotmail.com',
    hobbies: ['music', 'sports', 'programming'],
    address: {
        city: 'Miami',
        state: 'FL',
    },
    getBirthYear: function() {
        return 1996- this.age;
    }
}

let val;

val = person;

// Get specific value - both ways work fine
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['state']; // this will also work
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
];

for (let i = 0; i < people.length; i++) {
     console.log(people[i].name); // Names of all people objects.
};
