#!/bin/node

/* O script mais inteligente do mundo. 
 * Módulos Ecmascript6 no nodejs
 */

const modulo1 = require('./modulo1.cjs');
const moduloTeste = require('moduloTeste');

let p1 = new moduloTeste.Pessoa('Testonio', 66);

console.log(p1.json(), moduloTeste.aaa());

