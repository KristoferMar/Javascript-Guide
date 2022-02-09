// Creation of different arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;
// Get array length 
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];
val = numbers[0];

// Insert value into array's 3th place.
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// MUTATION ARRAYS
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end 
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1,3);
// Reverse 
numbers.reverse();

// Concatenate array - Merge arrats
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the "compare function"
val = numbers.sort(function(x,y) {
    return x-y;
})

// Reverse sort
val = numbers.sort(function(x,y){
    return y-x;
})
 

// Find
function under50(num) {
    return num < 50;
}
val = numbers.find(under50);

// Check if array is empty
if (numbers.length === 0) { console.log("Array is empty!") }

// Array using objects
const emplyee = {name: 'anders', age: 23}
const emplyee2 = {name: 'bende', age: 100}
const emplyee3 = {name: 'bob', age: 53}

let employeeArr = [emplyee, emplyee2, emplyee3];
let employeeNewArr = [...employeeArr, {name: "anders2", age: 235}]
console.log(employeeNewArr);
