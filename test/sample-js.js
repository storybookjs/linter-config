// this file should have prettier and eslint enabled!
import json from './sample-json.json';
import ts from './sample-ts';

const foo = 'baz';

const fooz = [foo, foo, foo, foo, foo, foo];

const baz = []
  .concat(fooz)
  .concat(fooz)
  .concat(fooz)
  .concat(fooz)
  .concat(fooz)
  .concat(fooz)
  .concat(fooz)
  .concat(fooz)
  .concat(fooz);

const x = (a) => a;

console.log({ baz, x, json, ts });

// checking for cspell to accept these words
console.log(`
  - addon
  - addons
  - hmr
  - params
  - codemod
  - codemods
  - webcomponents
`);
