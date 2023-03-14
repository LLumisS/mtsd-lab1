'use strict';

const { interactive } = require('./interactive');
const { uninteractive } = require('./uninteractive');

if (!process.argv[2]) {
  interactive();
} else {
  uninteractive();
}
