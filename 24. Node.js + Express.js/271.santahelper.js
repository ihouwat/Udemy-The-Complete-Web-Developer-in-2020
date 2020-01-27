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

console.log(floorNumber())
console.timeEnd('first')


// Looping method for next approaches
const arrayLoop = () => {
  if(dataArray[i] === '(') {
    num = num + 1;
  } else if(dataArray[i] === ')') {
    num = num - 1;
  }
}

// SECOND METHOD: 1.065ms
console.time('second')
const dataArray = fs.readFileSync('./santahelperinput', 'utf-8').split('');
const floorNumber2 = () => {
  num = 1;
  for(i=0; i <= dataArray.length; i++) {
    arrayLoop()
  }
  console.log(num)
}

floorNumber2();
console.timeEnd('second');

//2. When does Santa first enter the basement
// FINDING the basement: 0.525ms
console.time('position');
const findBasement = () => {
  num = 1;
    for (i=0; i <= dataArray.length; i++) {
      if (num > 0) {
        arrayLoop()
      } else {
        return i;
      }
  }
}
console.log(findBasement());
console.timeEnd('position');
