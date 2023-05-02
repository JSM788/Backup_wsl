#!/usr/bin/node

let count = '';
if (isNaN(Number(process.argv[2])) === false) {
  for (let i = 0; i < process.argv[2]; i++) {
    for (let j = 0; j < process.argv[2]; j++) {
      count += 'X';
    }
    console.log(count);
    count = '';
  }
} else {
  console.log('Missing size');
}
