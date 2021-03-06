// We can move up and down in with elements in the DOM, that is what his section is about.

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Gives us all kinds of nodes and not just Elements.
// Get child nodes 
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeNames;
val = list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute 
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10- Docktype

// Gives us JUST the elements.
// Get children element nodes 
val = list.children; // Returns HTML collection
val = list.children[0];
list.children[1].textContent = 'Hello';
// Children of children 
val = list.children[3].children[0].id = "test-link";
val = list.children[3].children; // Gives us the fourth one down.

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements.
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling 
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling; // We can nES multiple times.

console.log(val);

