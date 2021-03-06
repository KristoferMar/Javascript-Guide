
// Listener on web element.
document.querySelector('.clear-tasks').addEventListener('click', function(e) {
    console.log('Hello World');

    e.preventDefault(); // This prevents the default eg link for working.
});


document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e){
    console.log('Clicked');

    let val;

    val = e;

    // Event target element 
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList; // Get a collection

    // Changes the button on the event.
    // e.target.innerText = "hello";

    val = e.type;

    // Timestamp
    val = e.timeStamp;
     
    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coords event relative to the window
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}