// this file should have prettier and eslint enabled!

const foo = 'baz';

const fooz = [foo, foo, foo, foo, foo, foo];

const bazArray: string[] = [];

const baz = bazArray
  .concat(fooz)
  .concat(fooz)
  .concat(fooz)
  .concat(fooz)
  .concat(fooz)
  .concat(fooz)
  .concat(fooz)
  .concat(fooz);

const x = (a: unknown) => a;

console.log({ baz, x });

if (fooz.includes('baz')) {
  console.log('baz');
}
