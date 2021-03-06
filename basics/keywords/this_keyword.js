// The Javascript 'this' keyword refers to the object it belongs to.

// Example
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


//USED ALONE
// When used alone, the owner is the global object, so this refers to the global object. 
// In a browser window the Global object is [object window];

//Example
var x = this;