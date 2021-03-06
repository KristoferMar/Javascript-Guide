// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);

console.log(items[0]); // We can treat it like an array but it's NOT an array.

// Dom selection of multiple elements.
const listItems = document.querySelector('ul').getElementsByClassName('collenction-item');
console.log(listItems); 


// Get element by tag name - document.getElementsByTagNAme
const lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]); // Gives us first one.

// Convery HTML Collection to array
lis = Array.from(lis);
lis.reverse();

lis.forEach(function(li, index) {
    console.log(li.className)
    li.textContent = `${index}: Hello`
});

console.log(lis);


// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item'); // We can query anything.

items.forEach(function(item, index) {
    item.textContent = `${index}: Hello`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
    li.getElementsByClassName.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}

console.log(items);
