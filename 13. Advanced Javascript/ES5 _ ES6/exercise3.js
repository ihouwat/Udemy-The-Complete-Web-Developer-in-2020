// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
let a2 = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
    city       : "Sao Paulo"
};

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

const { firstName, lastName, age, eyeColor, city } = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

var newObj = {
  a,
  b,
  c,
}


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

var newMessage = `Hello ${firstName}, have I met you before? I think we met in ${city} last summer, no?`;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

function ageDefault(age='10'){
  return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"
sym1 = Symbol('This is my first Symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const newLocation = (username, location) => {
  if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}