#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  for (const elem of list) {
    if (elem === searchElement) {
      count += 1;
    }
  }
  return count;
};
