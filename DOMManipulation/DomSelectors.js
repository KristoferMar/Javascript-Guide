// All selectors below will only hit a single element.

// document.getElementById()

console.log(document.getElementById('task-title')); // Returns you the item with that id.

const taskTitle = document.getElementById('task-title'); // We should make use of variables instead of calling document directly.

// Get things from the element
document.getElementById('task-title').id;
document.getElementById('task-title').className;

// Change styling
document.getElementById('task-title').style.background = '#333'; // Change of color
document.getElementById('task-styling').style.color = '#fff';
document.getElementById('task-styling').style.padding = '5px';

// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerText = '<span style="color: red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title')); //id
console.log(document.querySelector('.card-title')); //class
console.log(document.querySelector('h5')); // Gives u first h5

document.querySelector('li').style.color = 'red'; // Only one (single) element will be hit 
document.querySelector('li ul').style.color = 'red';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3').style.color = 'yellow'; // Thirth one will become yellow
document.querySelector('li:nth-child(4)').textContent = 'Some text';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#cfc';




