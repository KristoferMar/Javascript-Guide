// Bubling up an event through the dom.

// EVENT BUBBLING
// All of those event will fire up based on bubble up.
document.querySelector('.card-title').addEventListener('click', 
function(){
    console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', 
function(){
    console.log('card content');
});

document.querySelector('.card').addEventListener('click', function(){
    console.log('card');
});

document.querySelector('.col').addEventListener('click', function(){
    console.log('col');
});

// EVENT DELGATION

const deleteItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

document.body.addEventListener('clivk')

function deleteItem() {
    console.log('delete item');
    console.log(e.target);
    if(e.target.ParentElement.className === 'delete-item secondary-content'){
        console.log('delete item');
    }

    // Finds child class.
    if(e.target.ParentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}

// Put the eventlistener on a parent and use that to make a delegation to a child element.
