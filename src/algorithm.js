'use strict';

const keys = ['a', 'b', 'c'];
const values = {
  a: null,
  b: null,
  c: null
};

function getAnswer(values) {
  let result = '';

  const a = values['a'];
  const b = values['b'];
  const c = values['c'];

  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

  const D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
    result = 'There are 0 roots.';
  } else if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    result = `There are 2 roots:\nx1 = ${x1}\nx2 = ${x2}`;
  } else {
    const x = (-b) / (2 * a);
    result = `There is 1 root:\nx = ${x}`;
  }

  return result;
}

exports.keys = keys;
exports.values = values;
exports.getAnswer = getAnswer;
