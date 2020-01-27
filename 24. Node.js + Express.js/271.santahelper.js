const fs = require('fs');

// FIRST METHOD
console.time('first')
const data = fs.readFileSync('./santahelperinput', 'utf-8');
const down = data.split('').filter(ch => ch === ')').length;
const up = data.split('').filter(ch => ch === '(').length;

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

// SECOND METHOD
console.time('second')
const data2 = fs.readFileSync('./santahelperinput', 'utf-8').split('');
const floorNumber2 = () => {
  num = 1;
  for(i=0; i <=data2.length; i++) {
    if(data2[i] === '(') {
      num = num + 1;
    } else {
      num = num -1;
    }
  }
  console.log(num)
}

floorNumber2();
console.timeEnd('second');