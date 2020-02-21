// set local storage item

// Difference between local and session storage is that session cleans up it items on close down and local doesent.

// Sets local storage item.
localStorage.setItem('name', 'John');

// Sets session storage item.
sessionStorage.setItem('name', 'Beth');

// Remove from storage
localStorage.removeItem('name');

// get from storage
const name = localStorage.getItem('name');
console.log(name);

//Clear local storage
localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    // Array of tasks to store in local storage
    let tasks; 
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');

    console.log(task);
    e.preventDefault();
})

// Foreach on tasks on local storage. 
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(element => {
    console.log(element);
});
