let val; 

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action; // Gives you actions connected to forms in dom.
val = document.links; // Gives you a <a> link from dom.
val = document[0].id;
val = document[0].classname;
val = document[0].classList[0];

val = document.image; // Gives us all images

val = document.scripts; // Get all scripts
val = document.scripts[2].getAttribute('src');


// Gives us an array of scrips in the following way
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script);
})
