// Use for when you know amout if iterations and while when you dont know

// FOR LOOP
for(let i = 0; i < 10; i++){
    if(i === 2) {
        console.log('2 is my favorite number')
        continue; // Keeps the loop going after the if (keep going)
    } 
    
    console.log('string number ' + i); // 0 -> 9
    
    if(i === 5) break;
}


// WHILE LOOP
let i = 0;
while (i < 10) {
    console.log('Number ' + i);
    i++;
}


// DO WHILE - Always gonna run once. 
let i = 0;

do {
    console.log('Number ' + i);
    i++;
}
while(i < 10);


// LOOP THROUGH ARRAY - List index of array.
const cars = ['ford', 'toyota']
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])    
}


// FOREACH - Prioratice this loop
cars.forEach(function(car, index, array) {
    console.log(car);
    console.log(index + ' Is the index')
    console.log(array, 'Shows actual array.')
})


// MAP - Return something different
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'},
    {id: 4, name: 'Kristofer'},
]

const ids = users.map(function(user) {
    return user.id;
})

console.log(ids);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}


// FORIN LOOPS
for(let x in user) {
    console.log(x); // Gives us the key.
    console.log(user[x]) // Gives us the key value pairs.
}