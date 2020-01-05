// 1. ternary operator

//syntax is: condition ? expr1 : expr2;
//if condition is true, provide expr1, if not, expr2;

function isUserValid(boolean) {
  return boolean;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied;"

var automatedAnswer = 
  "Your account # is " + (isUserValid(false) ? "1234" : "not available");
  // logs "Your account # is not available"

//Basically, ternary operators are conditionals. Example:
function condition() {
  if (isUserValid(true)) {
    return "you may enter";
  } else {
    return "access denied"
  }
}

var answer2 = condition();




// 2. switch statement
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward": 
      whatHappens = "you encounter a monster";
      break;
    case "back": 
      whatHappens = "you arrived home";
      break;
    case "right": 
      whatHappens = "you found a river";
      break;
    case "back": 
      whatHappens = "you run into a troll";
      break;
    default:
        whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}