//Advanced Array

const array = [1, 2, 10, 16]

const double = []
const newArray = array.forEach((num) => {
  double.push(num * 2);
})

console.log('forEach', double);


// Three important looping methods: map, filter, reduce

// 1. Map does a loop and returns a new array
const mapArray = array.map((num) => {
  return num * 2; // you always return with map method
})

console.log('map', mapArray);

// prefer map over forEach. forEach cares to iterate, whatever the result. map also iterates over an array, but it EXPECTS a return element and creates a new array.
// Syntax also avoids function side effects.
// Function is pure. It takes inputs and outputs expected values.

// Clean up the arrow function, since there is one parameter
const mapArray2 = array.map(num => num * 2);


//2. filter: adds conditional to create new filtered arrays
const filterArray = array.filter(num => num > 5); //only includes numbers that are greater than 5
console.log('filter', filterArray);


//3. reduce: you can do filtering and mapping with reduce

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num
}, 0);// this 0 defines the accumulator;
console.log('reduce', reduceArray); // Answer is 29, adds all the array members
// if the accumulator was '5', answer would be 34.