// 1. let + const - no need to use 'var' again

const player = 'bobby'; // cannot change this variable
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true; // limits scope to the if statement.
  console.log('inside', wizardLevel);
}
console.log('outside', wizardLevel);



//2. const can work as a function as well
const func = function() {
  console.log('func');
}

//however, you can change properties within a const object, but not the object itslef
const obj2 = {
  player2: 'sally',
  experience2: 100,
  wizardLevel2: false,
}

obj2.player2 = 'igor';
console.log(obj2.player2);// answer is 'igor'



// 3. Destructuring

const obj3 = {
  player3: 'bobby',
  experience3: 100,
  wizardLevel3: false,
}

// A lot of writing here.
// const player3 = obj3.player3;
// const experience3 = obj3.experience3;
// let wizardLevel3 = obj3.wizardLevel3;

// do the same with new,cleaner syntax
const { player3, experience3 } = obj3;// const being made out of selected properties within obj3
let { wizardLevel3 } = obj3;

console.log(player3);// answer is 'bobby' from line 41



// 4. Object Properties with dynamic property values

const name = 'jon snow';
const obj4 = {
  [name]: 'hello', // jon snow: 'hello'
  ['ray ' + 'smith']: 'hihi', // ray smith: 'hihi'
  [1+2]: 'hihi',// 3: 'hihi'
}

// another example
const a = "simon";
const b = true;
const c = {};

// old way of assigning to object
const oldWay = {
  a: a,
  b: b,
  c: c,
}

// new way: no need to repeat
const newWay = {
  a,
  b,
  c
}




//5. Template strings/ Back ticks allow you to bypass problems with quotation marks (see const greeting on line 95, vs template string on line 96)
// const age = 34;
// const pet = "horse";
// const greeting = "hello " + name + "you seem to be doing well."
// const greetingTemplate = `"Hello ${name}, you seem to be ${age-10}. What a lovely ${pet} you have`;



//6. default arguments
function greet(name='', age=30, pet='cat'){
  return `"Hello ${name}, you seem to be ${age-10}. What a lovely ${pet} you have`;
}
// return is: Hello, you seem to be 20. What a lovely horse you have. NOTICE how empty name 'default argument' does not display.



//7. Symbol type
let sym1 = Symbol();
let sym3 = Symbol('foo');
let sym2 = Symbol('foo');
//if you run sym2 === sym3, return is false, even though it looks identical.
// basically Symbol is to create a UNIQUE object property to avoid collisions.
// Not used a lot.



//8. Arrow functions
function add(a, b) {
  return a + b;
}

const add2 = (a,b) => a + b; // assumes a single return
// const functionName = (parameters) => function