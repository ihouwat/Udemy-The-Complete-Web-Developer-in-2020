//ES7 only adds two methods (ES2016)

//includes method
'Helllllo'.includes('o'); //true

const pets = ['cats', 'dogs', 'snakes']
pets.includes('bird');//false
pets.includes('cat');//false
pets.includes('cats');//true

//exponential
const square = (x) => x**2;
const cube = (y) => y**3;



//ES8 (ES2017)

//string padding
padStart()//padStart(1), adds 1 empty string before a string
padEnd()


// trailing commas in functions, parameter lists, and calls
const fun = (a,b,c,d,) => {
  console.log(a);
};
fun(1,2,3,4,); // no error is thrown

// New object methods
Object.values
Object.entries
//Old Method
Object.keys// will go over an object like an array with properties and values

let obj = {
  user0: 'Santa',
  user1: 'Rudolf',
  user2: 'Mr. Grinch',
}

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});// logs the keys and values, ie user0 Santa, user1 Rudolf, user2 Mr. Grinch.

Object.values(obj).forEach(value => {
  console.log(value);
})// logs values, ie Santa, Rudolf, Mr. Grinch

Object.entries(obj).forEach(value => {
  console.log(value);
})// creates an Array for each user, ie ['user0', 'Santa'], etc.
// NOW you can use all the array functions, like map, filter, reduce

// Example
Object.entries(obj).map(value => {
  return value[1] + value[0].replace('user', '');
})// creates arrays, then iterates over the arrays and creates one with new values ['Santa0', 'Rudolf1', 'Mr. Grinch2']



//Async Await: later in this course



//ES10 (ES2019)

//flat() for arrays
const array = [1,2,3,4,5]
array.flat();//Nothing changes. We return a new array.

const array2 = [1, [2,3], [4,5]];
array2.flat();//[1,2,3,4,5], ie no more nested array

const array3 = [1,2,[3,4,[5]]];
array3.flat();//[1,2,3,4,[5]] flattened one layer, which is default
array3.flat(2);// [1,2,3,4,5] flattened two layers, due to arguments

const entries = ['bob', 'sally',,,,,,'cindy'];
entries.flat();//cleans up the empty data

//flatMap() - uses flat to a depth of one and adds map method

//trimStart() and trimEnd()
const userEmail1 = '          eddytheeagle@gmail.com';
const userEmail2 = 'jonnydangerous@gmail.com        ';
console.log(userEmail1.trimStart());
console.log(userEmail2.trimEnd());

//fromEntries: transforms a list of key, value pairs into an object
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];
Object.fromEntries(userProfiles)// we get an oject with key, value pairs
// this is the opposite of Object.entries from ES8

//try - catch update
try {
  //try a piece of code
} catch {
  //if error in try block, do something in this catch block
}