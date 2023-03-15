'use strict';

const { interactive } = require('./interactive');
const { noninteractive } = require('./non-interactive');

if (!process.argv[2]) {
  interactive();
} else {
  noninteractive();
}
