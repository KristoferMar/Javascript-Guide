// Array.prototype.Reduce()
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Simple example
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((x, y) => x + y);

// Object example
const members = [
    {name: "Peter", age: 18},
    {name: "Jan", age: 35},
    {name: "Janne", age: 25},
    {name: "Martin", age: 22},
];
let initialValue = 0;
let reducer = members.reduce((accumulator, member, index, arr) => {
    return accumulator + member.age / arr.length
}, initialValue);

console.log(reducer, "Gennemsnits alder")

function accumulator(obj) {
    return obj.age + 2;
}

var output = document.createElement("P");
output.innerText = `Output: ${reducer}`;
document.body.appendChild(output);