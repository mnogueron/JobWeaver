'use strict';

const teamtailorAdapter = require('..');
const assert = require('assert').strict;

assert.strictEqual(teamtailorAdapter(), 'Hello from teamtailorAdapter');
console.info('teamtailorAdapter tests passed');
