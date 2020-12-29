// We can get, set & manipulate dates in many different ways.

let val;

const today = new Date();
let birthday = new Date('9-10-1992'); // Sets the date
birthday = new Date('September 10 1981'); // Sets the date differently
birthday = new Date('9/10/1993'); 

// What can we get?
val = today;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // Current timestamp - changes on reload.

// We can set dates.
birthday.setMonth(2); // Sets stuff
birthday.setDate(12);
birthday.setFullYear(1995);
birthday.setHours(3);
birthday.setMinutes(20);
birthday.setSeconds(23);

console.log(typeof val); // Object