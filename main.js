'use strict';

const { interactive } = require('./interactive');
const { uninteractive } = require('./non-interactive');

if (!process.argv[2]) {
  interactive();
} else {
  uninteractive();
}
