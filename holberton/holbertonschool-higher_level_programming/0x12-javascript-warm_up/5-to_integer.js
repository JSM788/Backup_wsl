#!/usr/bin/node

if (isNaN(Number(process.argv[2])) === false) {
  console.log(`My number: ${Number(process.argv[2])}`);
} else {
  console.log('Not a number');
}
