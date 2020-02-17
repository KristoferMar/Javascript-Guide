// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
window.alert('hello world.');

// Prompt 
const input = prompt();
alert(input);

// Confirm
if(confirm('Are you sure')) {
    console.log('YES');
}else {
    console.log('NO');
}

let val; 

// Outter heigh and with
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // Shows the query string fx ?id=1 after the url will dispaly in console.

// Redirect
window.location.href = 'http://webey.dk';
// Reload
window.location.reload();

// History object
window.history.go(-2); // Goes two histories back and so on.

val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent; // Browser info and so on
val = window.navigator.platform; // gives you win32, win64 and so on.
val = window.navigator.vendor;
val = window.navigator.language; // en-US and so on.

console.log(val);
