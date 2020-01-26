const fs = require('fs'); //import module

// readFile method reads a file. 
// First parameter is path to a file
// readFile is asynchronous: it reads the file
// posts the results, while the rest of the script runs.
fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errorrr');
  }
  //toString method transforms utf8 encoding to string
  console.log('Async', data.toString())
})

// readFileSync is a synchronous method
// it pauses the script as it reads the file.
const file = fs.readFileSync ('./hello.txt');
console.log('Sync', file.toString());

// APPEND
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//   if (err) {
//     console.log(err);
//   }
// })

// WRITE
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//   if (err) {
//     console.log(err);
//   }
// })

// DELETE
fs.unlink('./bye.txt', err => {
  if (err) {
    console.log(err)
  }
  console.log('Inception')
})