// JavaScript strings are used for storing and manipulating text.

const firstName = 'Williams';
const lastName = 'Johnson';
const age = 24;
const str = 'Hello there, my name is Brad';

let val;
val = firstName + lastname;

//Concatenation
val = firstName + ' ' + lastName;

// Append 
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping 
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('l'); // gives us index of l on string.
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstNAme.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3); // Starts from the back

// split()
val = str.split(' ') // splits on all spaces and puts outputs in array.

// repalce()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('Hello'); // Returns boolean.

console.log(val);