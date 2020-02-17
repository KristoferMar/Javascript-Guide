const color = 'red';

switch (color) {
    case 'red':
        console.log('It is red')
        break;
    case 'blue':
        console.log('It is blue')
        break;
    case 'yellow':
        console.log('It is yellow')
        break;
    default:
        console.log('color is not red, not blue and not yellow');
        break;
}

// Switch for the week.

let day;
switch (new Date().getDay()) {
    case 0:
        console.log('its sunday');
        day = 'sunday';
        break;
    case 1:
        console.log('its Monday');
        day = 'sunday';
        break;
    case 2:
        console.log('its Tuesday');
        day = 'sunday';
        break;
    
        // and so on ...

    default:
        break;
}

console.log(`Today is ${day}`);
