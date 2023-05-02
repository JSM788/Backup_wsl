#!/usr/bin/node

exports.esrever = function (list) {
  const arr = [];
  for (const elem of list) {
    arr.unshift(elem);
  }
  return arr;
};
