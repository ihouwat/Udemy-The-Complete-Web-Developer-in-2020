// function scope is blank everytime we run it. Helps prevent collisions.
const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  }
  return second;
}

// Problem. newFunc only runs const second = () => {
//    alert(greet);
//  }
const newFunc = first();
newFunc();

// 1. CLOSURES: a function runs. it executes. it never will execute again.
// BUT it is going to remember that there are references to those variables
// so the child scope always has access to the parent scope.
// But parent scope does not have access to children scope.


// 2. CURRYING: converting a function that takes multiple arguments into one that takes them one at a time
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;// think of each arrow as a function
curriedMultiply(3); // returns (b) => a * b; it assumes a = 3;
curriedMultiply(3)(4); // returns 12
// Why do this? It is more extensible
const multiplyBy5 = curriedMultiply(5);
// now I can do this:
multiplyBy5(10); //returns 50


// 3. COMPOSE: putting two functions together to form a third function. The output of one function is the input of the other.
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);
//f(g(a))
//f(g(5));
//f(sum(5));
//f(6);
//sum(6);
//7;

// ADVICE: avoid side effects, functional purity
// side effects: things that happen in a function that we are not aware of. example: reassigning a variable
var a = 1;
function b() {
  a = 2; // this is the side effect, as it is affecting the world outside of the function;
}
//functional purity: avoid side effects. ALWAYS return a value to avoid 'undefined'. By doing this, we create a DETERMINISTIC function: no matter what the inputs, I will always have the same return values