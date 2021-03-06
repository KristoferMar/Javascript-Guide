
// One "=" means assignment
const id = 100;


// EQUAL TO
if(id == 101) {
    console.log('INCORRECT');
} else {
    console.log('correct');
}


// NOT EQUAL TO
if(id != 100) {
    console.log('correct');
} else {
    console.log('INCORRECT');
}


// COMPARE WITH TYPE - we do that with "==="
if(id === 101) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}


// or (incorrect)

if(id !== 101) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// Test definition, the correct way (test if undefined)
if(typeof id !== undefined){
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}

// GREATER OR LESS THAN
if(id > 200) { console.log('above') } else { console.log('under') }

// IF ELSE
const color = 'red';
if(color === 'red'){
    console.log('red');
} else if(color === 'blue') {
    console.log('Color is blue');
} else {
    console.log('Color is not red or blue');
}

// LOGICAL OPERATORS - Find them below
const name = 'Steve';
const age = 20;

if(age > 0 && age < 12) {
    console.log(`${name} is a child`)
} else if(age >= 13 && age <=19) {
    console.log(`${name} is a teenager`);
}
else if(age === 100 || age === 101) {
    console.log('very old')
}
 else {
    console.log(`${name} is an adult`);
}

// AND  &&
// OR   ||

// TERNARY OPERATOR
console.log(id === 100 ? 'correct' : 'Incorrect')

// WITHOUT BRACES
if(id === 100)
    console.log('this is correct')
else 
    console.log('This is incorrect')
