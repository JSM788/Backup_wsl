#!/usr/bin/node

/*
const arr = [];
const args = process.argv;
if (args.length <= 3) {
  console.log(0);
} else {
  for (let i = 0; i < args.length - 2; i++) {
    arr.push(args[i + 2]);
    arr.sort((a, b) => (a - b));
  }
  console.log(arr[arr.length - 2]);
}
*/

if (process.argv.length <= 3) {
  console.log(0);
} else {
  const arr = process.argv.map((iterador) => (iterador));
  arr.sort((a, b) => (a - b));
  console.log(arr[arr.length - 2]);
}
