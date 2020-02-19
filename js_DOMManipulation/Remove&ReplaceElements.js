// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);


// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test'); // Add class
link.classList.remove('test') // Remove class
val = link; 

// Attributes 
val = link.getAttribute('href');
val = link.setAttribute('href', 'www.webey.dk');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(firstLi.children[0]);