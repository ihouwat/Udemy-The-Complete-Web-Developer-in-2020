//Advanced loops
const basket = ['apples', 'oranges', 'grapes'];

//1. for
for(let i = 0; i<basket.length;i++){
  console.log(basket[i]);
}

//2. forEach
basket.forEach(item => {
  console.log(item);
})

//3. for of (ES6)
// 'Iterating' can be done on 'iterables'. Those include: arrays, strings
for (item of basket) {
  console.log(item);
}

//4. for in - object properties
// This is not iteration
// enumerating - objects
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
}

for (item in detailedBasket) {
  console.log(item);//apples, oranges, grapes
}

for (item in basket) {
  console.log(item)// 0,1,2 - the indexes of the basket array. an array is an object, under the hood;
}