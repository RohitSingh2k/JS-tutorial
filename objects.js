// ---------------------------------------------------------------------------------
// Objects Array and Functions (These are Reference types)
// {} Object litrals
// If the name and value is of same name then we can directly write name as an object item.
// -----------------------------------------------------------------------------------------

let mName = 'Rohit Singh'
let person = {
    mName,                 // same as - >  mName : mName,
    age: 21
};

// --------------------
// Dot notations
// ------------------------

console.log(person);
console.log(person.mName);

console.log();

// ---------------------------------------------------------------
// Bracket notation (We use this when we don't know property name)
// ------------------------------------------------------------------------

console.log(person['mName']);

let selection = 'age';

console.log(person[selection]);

console.log();

// JS do not have classes so the alternative is the following : 
// ---------------------------------------------------------------------
// 1) Factory Function : 
//      * It does not require "new" keyword
//      * Just like factory produces item this type of function produces Objects.
//      * Use Camel naming convention
// ----------------------------------------------------------------------------------------

function nameCreator(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName () {
            return `${firstName} ${lastName}`;
        }
    };
}

const myName = nameCreator('Rohit','Singh');
const myAnotherName = nameCreator('Anuj','Singh');

console.log(myName.fullName());
console.log(myAnotherName.fullName());


console.log(myName.firstName);

console.log();
// ---------------------------------------------------------------------
// 1) Constructor Function : 
//      * It require "this" and "new" keyword
//      * no return statement is required.
//      * Use Pascal naming convention
// ------------------------------------------------------------------------------

function NameCreator (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

const MyName = new NameCreator('Rohit','Singh');
const MyAnotherName = new NameCreator('Anuj','Singh');

console.log(MyName.fullName());
console.log(MyAnotherName.fullName());

console.log(MyName.firstName);

console.log();
// ------------------------------------------------
// getters => access the property of an object  (we use "get" keyword)
// setters => change the properties of an object (mutate) them   (we use "set" keyword)
// --------------------------------------------------------------------

const person_id = {
    firstName : 'Rohit',
    lastName : 'Singh',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}


console.log(person_id.fullName);

person_id.fullName = 'Anuj Singh';
console.log(person_id.fullName);

