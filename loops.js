// In javascript we have 5 loops
// 3 types of For loops (for), (for...in) and (for...of)
// 1 While loop
// 1 Do while loop


// For loop
for (let i = 1; i <= 5; i++ ) {
    console.log(`${i}) I am a simple for loop`);
}

// While loop
let i = 1
while (i <= 5) {
    console.log(`${i}) I am While Loop`);
    i++;
}

// Do While loop (This type of loops is always executed at least once even if the condition is false)
let j = 0;
do {
    if (j % 2 !== 0) console.log(j);
    j++;
} while (j <= 5);

// For in loop (Here key gives key)
let person = {
    name : 'Rohit Singh',
    age : 21
}
for (let key in person) {
    console.log(key, person[key]);
}

// For of loop (here key give value)
let person2 = ['Rohit', 'Mohit', 'Nikhil']
for (let val of person2) {
    console.log(val);
}
