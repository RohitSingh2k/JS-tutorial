// Arithmetic

let x = 10;
let y = 3;

console.log("Arithmetic Operators");
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); // It will be print x to the power y

// Increment 

console.log("Incremental Operators")
console.log(x++);
console.log(++x);

// Decrement

console.log("Decremental Operators")
console.log(y--);
console.log(--y);

// Assignment

console.log("Assignment Operator")
x -= 1;
y += 1;
console.log(x,y)
x /= 2;
y *= 3;
console.log(x,y)
y **= x;
x %= y;
console.log(x,y)

// Comparison

x = 1;
console.log("Relational Operator")
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

console.log("Equality Operator");
console.log(x === 1);
console.log(x !== 1);

// Strict Equality
console.log("Strict Equality");
console.log('1' === 1);
console.log(1 === 1);
// Lose Equality
console.log("Loose Equality");
console.log('1' == 1);
console.log(1 == 1);

// Ternary Operator
y = 101
y > 100 ? console.log("GOLD") : console.log("SILVER")

// Logical

//AND
console.log(true && false)
console.log(true && true)
// OR
console.log(true || false)
console.log(true || true)
// NOT
console.log(!true)


// Bitwise

console.log("Bitwise Operator")
let a = 0 | 2
let b = 4 & 0
console.log(a,b)