
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// Answer is 3;

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
// answer is 0
// to get '5', you must first run q2() in your console to add the new value. then run q22()



//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
// undefined. scopes are local. 
// for it to work, would have to call q3() first to add property a to the window object, then q32()

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// answer is test. a is a local variable

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
//answer is 5. with var keyword, if statements do not create a new scope
