/**
 * #######################
 * ## Common JS: import ##
 * #######################
 */

const { sum, sub } = require('./cjs-export');

console.log('Suma:', sum(5, 5));

console.log('Resta:', sub(5, 5));
