const fs = require('fs');

// 1. What floor does Santa end up on
// FIRST METHOD: 7.287ms
console.time('first')
const dataRaw = fs.readFileSync('./santahelperinput', 'utf-8');
const down = dataRaw.split('').filter(ch => ch === ')').length;
const up = dataRaw.split('').filter(ch => ch === '(').length;

const floorNumber = () => {
  if (down > up) {
    return ('-', down - up)
  } else if (up > down) {
    return up - down
  }
  return 0
}
console.timeEnd('first')
console.log(floorNumber())



// Looping method for next approaches
const arrayLoop = () => {
  if(dataArray[i] === '(') {
    num = num + 1;
  } else if(dataArray[i] === ')') {
    num = num - 1;
  }
}

// SECOND METHOD, fastest time: 1.065ms
console.time('second')
const dataArray = fs.readFileSync('./santahelperinput', 'utf-8').split('');
const floorNumber2 = () => {
  num = 0;
  for(i=0; i <= dataArray.length; i++) {
    arrayLoop()
  }
  console.timeEnd('second');
  console.log(num)
}

floorNumber2();

//2. When does Santa first enter the basement
// FINDING the basement, fastest time: 0.104ms
const findBasement = () => {
  console.time('position');
  num = 1;
    for (i=0; i <= dataArray.length; i++) {
      if (num > 0) {
        arrayLoop()
      } else {
        console.timeEnd('position');
        return i;
      }
  }
}
console.log(findBasement());





// Andrei's solution to question 1, fastest time: 3.110ms
function question1() {
  console.time('Andrei1');
  fs.readFile('./santahelperinput', (err, data) => {
    const directions = data.toString(); // turns data to string
    const directionsArray = directions.split('');
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === '(') {
        return acc + 1
      } else if (currentValue === ')') {
        return acc -= 1
      }
    }, 0)
    console.timeEnd('Andrei1');
    console.log('floor:', answer);
  })
}

question1()

// Andrei's solution to question 2, fastest time: 2.098ms
function question2() {
  console.time('Andrei2');
  fs.readFile('./santahelperinput', (err, data) => {
    const directions = data.toString(); // turns data to string
    const directionsArray = directions.split('');
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentItem) => {
      if (currentItem === '(') {
        accumulator + 1
      } else if (currentItem === ')') {
        accumulator -= 1
      }
      counter ++; // increases counter everytime we go through a loop
      return accumulator < 0; // stop once it is less than 0, ending the function
    })
    console.timeEnd('Andrei2');
    console.log('basement entered at:', counter); 
  })
}

question2()
