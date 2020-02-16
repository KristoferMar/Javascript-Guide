const num1 = 100;
const num2 = 50;
let val; 

// Simple math with numbers
val = num1 + num2; 
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8); // will be 3
val = Math.ceil(2.2); // will be 3
val = Math.floor(2.8); // Will be 2
val = Math.sqrt(64);
val = Math.abs(-3); // returns 3
val = Math.pow(8, 2); // 8^2
val = Math.min(2,33,4,1,55,6,3); // Returns lowest value
val = Math.max(2,3,5) // Returns max number
val = Math.random();

val = Math.floor(Math.random() * 20 + 1); // Random number between 0-20

console.log(val);