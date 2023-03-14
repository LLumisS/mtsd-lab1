'use strict';

const readlineSync = require('readline-sync');
const fs = require('fs');

const keys = ['a', 'b', 'c'];
const values = {
  a: null,
  b: null,
  c: null
};

function question(key) {
  let value;

  while (true) {
    value = readlineSync.question(`${key} = `);

    if (key === 'a' && value === '0')
      console.log('Error. Value \'a\' cannot be 0');
    else if (isNaN(value) || (value === ''))
      console.log('Error. Expected a valid real number');
    else
      return value;
  }
}

function isValid(values) {
  for (const key of keys) {
    const value = values[key];

    if ((key === 'a' && value === '0') ||
        isNaN(value) || value === '' ||
        values.length !== 3)
      return false;
  }
  return true;
}


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

function interactive() {
  for (const key of keys) {
    const value = question(key);
    values[key] = value;
  }

  console.log(getAnswer(values));
}

function uninteractive() {
  if (!fs.existsSync(process.argv[2])) {
    console.log('Error. File does not exist');
    return;
  }

  const data = fs.readFileSync(process.argv[2], 'utf8');
  const valuesArr = data.split(' ').map(val => Number(val));

  let i = 0;
  for (const key of keys) {
    values[key] = valuesArr[i];
    i++;
  }

  if (isValid(values))
    console.log(getAnswer(values));
  else
    console.log('Error. Invalid data format');
}

if (!process.argv[2]) {
  interactive();
} else {
  uninteractive();
}
