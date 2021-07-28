/*

if (condition) {
    statement
}
else if (anotherCondition) {
    statement
}
else if (yetAnotherCondition) {
    statement
}
.
.
.
else {
    final statement
}


*/

const curTime = 15;

if (6 <= curTime && curTime <= 12) {
    console.log("Good Morning!");
}
else if (13 <= curTime && curTime <= 18) {
    console.log("Good Afternoon!");
}
else {
    console.log("Good Evening!");
}

// Switch Statements

/*

switch (value) {
    case 1: 
        statement
        break;
    case 2:
        statement
        break;
    .
    .
    .
    default:
        statement
}

*/

let user = 'admin';

switch (user) {
    case 'admin':
        console.log('Admin User');
        break;
    case 'Moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Normal User');
}