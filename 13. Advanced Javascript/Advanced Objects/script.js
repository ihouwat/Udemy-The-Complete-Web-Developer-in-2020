//1. REFERENCE TYPE
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// object1 === object2: true, since we are referring to the same reference/address/storage 'box'
// object1 === object3: false, since we are not referring to the same reference/address/storage 'box'
// object1.value === object3.value: true, since the number 10 is a primitive type, and will always be a number 10.

// 2. CONTEXT VS. SCOPE, I.E. 'THIS'
const object4 = {
  a: function() {
    console.log(this);// 'this' refers to the object
  }
}

const object5 = () => this;// 'this' refers to the 'window' object

// 3.INSTANTIATION: WHEN YOU MAKE A COPY OF AN OBJECT AND REUSE THE CODE
// classes are the copy template. class names are capitalized
class Player {
  constructor(name, type) { //constructor function runs first on each instantiation
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}, I'm a ${this.type}.`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type) // whenever extending classes, use 'super' to access constructor
  }
  play() {
    console.log(`WEEEEE, Im a $(this.type)`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer'); // 'new' keyword creates instance
const wizard2 = new Wizard('Shawn', 'Dark Magic');


// 4. PASS BY REFERENCE VS PASS BY VALUE
// Pass by value: refers to primitive types. primitives are immutable. To change a primitive value, you have to access its location in memory and change the value.
// Ex:
var a = 5;
var b = a;
b++; //answer is 6
a; //answer is still 5

// Pass by Reference
let obj1 = {name: 'Yao', password: '123'}
let obj2 = obj1 //referencing to ONE object that is stored in memory

obj2.password = 'easypeasy'
// now obj1.password = 'easypeasy'
// advantage is that you store one object in memory, that is REFERRED to twice (hence 'pass by reference'), as opposed to two objects in memory. Disadvantage is that you change each reference of the object, it changes the object for everyone

// How to clone objects
// Ex1: array
var c = [1,2,3];
var d = [].concat(c); //d is now cloned

// Ex2: objects
let obj3 = {a: 'a', b: 'b'};
let clone = Object.assign({}, obj3);// Object looks for object; assign takes the properties, ie {}, and looks for which object to clone, ie obj3
let clone2 = {...obj3}; // new JS feature

// What if we have another object within an object
let obj4 = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try to copy me',
  },
}
let clone3 = {...obj4}// cloned everything
//NOW, if I do: obj4.c.deep = 'hahaha';// clone3.deep is overwritten as well! What happened? Although we cloned the initial object, it was a 'shallow clone'. It cloned the first level of objects, ie: a, b, c. However, we have another address, the object within the object, ie: deep. And that got changed. How do we do 'DEEP CLONING?' WE use JSON
let superClone = JSON.parse(JSON.stringify(obj4))//stringify turns everything into a string. THen it is parsed and turned back into an object
obj4.c.deep = 'hahaha'

// Be careful with deep cloning. If the objecs are very deep/massive, it will take a while to clone objects. You won't see this a lot in the real world.


//5. TYPE COERCION
1 == '1'; //true. in other words, when the operands are different types, one of them will be converted into an equivalent value by the JS engine. All languages have type coercion. JS is heavier, however, since it is dynamically typed.

// Double-equal (==) is used for type coercion. This asks JS to look for comparing types.
1 === '1'; //false
// NEVER USE DOUBLE-EQUAL