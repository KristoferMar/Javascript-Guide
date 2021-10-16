//The find() method returns the first value in the array, if an element in the array satisfies the provided testing function. Otherwise undefined is returend.

//Example
myArray.find(x => x.id === '45');


//Good to know

//Methods like find() and filter() and arrow functions are not supported by older browsers like IE.


// EXAMPLE
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12



// Find an object in an array by one of its properties
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  function isCherries(fruit) {
    return fruit.name === 'cherries';
  }
  
  console.log(inventory.find(isCherries));
  // { name: 'cherries', quantity: 5 }



  // Using arrow function and destructuring
  const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  const result = inventory.find( ({ name }) => name === 'cherries' );
  
  console.log(result) // { name: 'cherries', quantity: 5 }



  // Find prime number in array
  function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
  console.log([4, 5, 8, 12].find(isPrime)); // 5