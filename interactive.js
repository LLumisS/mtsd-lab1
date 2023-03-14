'use strict';

const readlineSync = require('readline-sync');
const { keys, values, getAnswer } = require('./algorithm');

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

function interactive() {
  for (const key of keys) {
    const value = question(key);
    values[key] = value;
  }

  console.log(getAnswer(values));
}
exports.interactive = interactive;
