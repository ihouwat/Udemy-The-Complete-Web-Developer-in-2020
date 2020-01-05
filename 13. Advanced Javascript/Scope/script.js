// scope

//Root Scope (window)
var fun = 5;

function funFunction() {
  // child scope
  var fun = "hello";
  console.log(1, fun);
}

function funnerFunction() {
  // child scope
  var fun = "Byee";
  console.log(2, fun);
}

function funnestFunction() {
  // child scope
  fun = "Ahhhhhh"; // this will change fun variable in root scope
  console.log(3, fun);
}

console.log("window", fun); // will show root scope, ie: 'window 5'
funFunction(); // runs its "hello"
funnerFunction(); // runs "Byee"
funnestFunction(); // runs "Ahhhhhh"
console.log(fun); // runs "Ahhhhhh" - funnestFunction changed Root scope

// LESSON: be careful with naming conflicts between local and root scopes. 
// In other words, try to avoid the same names for variables across scopes.