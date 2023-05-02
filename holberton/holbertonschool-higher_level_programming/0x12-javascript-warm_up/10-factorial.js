#!/usr/bin/node

if (Number(process.argv[2])) {
  console.log(factorial(process.argv[2]));
} else {
  console.log(1);
}

function factorial (n) {
  if (n === 0) {
    return 1;
  }
  return (n * factorial(n - 1));
}
