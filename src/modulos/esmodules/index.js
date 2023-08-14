#!/bin/node

// De acordo com o node
// type:module deve ser
// definido no package.json
// para poder usar o import

import { smart } from 'esmoduletest';
import { repeat } from 'esmoduletest';

import { explode } from './modulo.mjs';

smart();
repeat("test");
explode();

