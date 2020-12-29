// FUNCTION DECLARATIONS

// The = 'john' is to overwrite if undefined.
function greet(firstName = 'John', lastName = 'Doe'){
    return 'Hello ' + firstName + ' '+ lastName;
    //Function scope..
}

console.log(greet('John', 'bro'));

// FUNCTION EXPRESIONS
const square = function(x){
    return x*x;
};

console.log(square(9));


// IMMIDIATLY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// it's a function you declare and run at the same time.
(function(name) {
    console.log('IIFE Ran...');
    console.log(`${name} is here`)
})('brad');


// PROPERTY METHODS
const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();


// Arrow functions
// Arrow functions are annonymous functions with no names. 

//Function
hello = function() {
    return "Hello World!";
  }

// Arrow function
hello = () => "Hello World!";
// or
hello = (val) => "Hello " + val;



