// Section is about template literals and how to use variables and display them in dom.

const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5)
html = '<ul>' + 
'<li>Name: '+ name + '</li>'
'<li>Age: ' + age + '</li>'
'<li>Job: ' + job + '</li>'
'<li>City: ' + city + '</li>'
'</ul>';

function hello() {
    return 'hello';
}

// With template strings (es6)
html = `
    <ul> 
        <li>Name: ${name} </li>
        <li>Age:   ${age} </li>
        <li>Job:   ${job}  </li>
        <li>City:  ${city}  </li>
        <li>Name: ${2 + 2} </li>
        <li>Age:   ${hello()} </li>
        <li>Job:   ${age > 30 ? 'Over 30' : 'Under 30'}  </li>
    </ul>
`;

document.body.innerHTML = html;