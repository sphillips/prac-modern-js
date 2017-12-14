'use strict';

var double = function double(value) {
  return value * 2;
};
console.log(double(3));
// <- 6

var goodbye = 'Goodbye!';

function hello() {
  return goodbye;
}

if (false) {}