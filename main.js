'use strict';

const readlineSync = require("readline-sync");

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

        if (key == 'a' && value == 0)
            console.log('Error. Value \'a\' cannot be 0');
        else if (isNaN(value) || (value == ''))
            console.log('Error. Expected a valid real number');
        else
            return value;
    }
}

for (const key of keys)
{
    const value = question(key);
    values[key] = value;
}

const a = values['a'];
const b = values['b'];
const c = values['c'];

console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

const D = Math.pow(b, 2) - 4 * a * c;

if(D < 0) {
    console.log('There are 0 roots.');
} else if (D > 0) {
    const x1 = (-b + Math.sqrt(D))/(2 * a);
    const x2 = (-b - Math.sqrt(D))/(2 * a);
    console.log(`There are 2 roots:\nx1 = ${x1}\nx2 = ${x2}`);
} else {
    const x = (-b)/(2 * a);
    console.log(`There is 1 root:\nx = ${x}`);
}
