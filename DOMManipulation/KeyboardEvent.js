const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);

// keydown - triggers on key press
taskInput.addEventListener('keydown', runEvent);

// keyup - Fires when you lift key up.
taskInput.addEventListener('keyup', runEvent);

// Keypress
taskInput.addEventListener('keypress', runEvent);

// Focus
taskInput.addEventListener('focus', runEvent);

// Blur - When you press outsite an input
taskInput.addEventListener('blur', runEvent);

// Cut
taskInput.addEventListener('cut', runEvent);

// Paste
taskInput.addEventListener('paste', runEvent);

// input
taskInput.addEventListener('input', runEvent);

// Keypress
taskInput.addEventListener('keypress', runEvent);

// Change - Detectes changes.
select.addEventListener('change', runEvent);

function runEvent(){
    console.log(`EVENT TYPE: ${e.type}`);

    // Get input value
    console.log(taskInput.value); //Input element.

    // For all keytypes it outputs it.
    console.log(e.target.value);

    e.preventDefault();
}