function greet(name) {  // here name is a parameter
    console.log("Hello " + name);
}

greet("Rohit");   // here Rohit is an argument
greet("Mohit");
greet("Nikhil");

function square (number) {
    return number * number;
}

let squareNum = square(4);

console.log(squareNum);

// ----------------------------------------------------------------------------------------------------------
// There are two types of function declaration in JS.
// 1) :_________________Normal Functions declaration___________________:
//      *   Here we can use it above function declaration.
//      *   In JS compilation all function declarations are automatically go on the top of the code. ( Hoisting )
//      *   HOISTING is the process of moving the function declaration at the top
// ----------------------------------------------------------------------------------------------------------

hello();

function hello() {
    console.log("Hello");
}

// 2) :__________________Function Expression declaration___________________:
// Here we can use function only after it's declaration.

let hello1 = function () {
    console.log("Hello1");
}

hello1();


// ----------------------------------------------------------------
// For Infinite arguments we have "arguments" keyword in function.

function sum() {
    let sumation = 0
    for (let elements of arguments) {
        sumation += elements;
    }
    return sumation;
}

console.log(sum(1,2,3,4,5,6,7,8,9));

// -------------------------------------------------------------------------
// Default parameter in JS function

function test (a = 8, b = 3) {
    return a - b;
}

console.log(test());
console.log(test(19,5));