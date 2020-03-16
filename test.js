const test = require('tape');

test('add 2 numbers', t => {
  const actual = 2 + 2;
  const expected = 4;

  t.equal(actual, expected);
  t.end();
});