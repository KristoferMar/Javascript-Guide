// Scopes are about where to and how to access variables

var a = 1; //This can cause errors.
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Function Scope: ', a, b, c);
}


if(true) {
    // Block Scope
    var a = 4; // This changed the global scope!
    let b = 5;
    const c = 6;
    console.log('If Scope: ', a, b, c);
}


// If we use var in the loop it will change the global a
for(let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);