'use strict';

const fs = require('fs');
const { keys, values, getAnswer } = require('./algorithm');

function isValid(values) {
  if (values[0] === 0 || values.length !== 3) return false;

  for (let i = 0; i < values.length; i++)
    if (isNaN(values[i]) || values[i] === '') return false;

  return true;
}

function noninteractive() {
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

  if (isValid(valuesArr))
    console.log(getAnswer(values));
  else
    console.log('Error. Invalid data format');
}

exports.noninteractive = noninteractive;
