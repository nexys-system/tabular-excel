import * as Csv from './csv';

test('csv', () => {
  const rows = [
    ['a', 'b'],
    ['c', 'd'],
    ['e', 'f']
  ];

  const r = Csv.to(rows);

  const e = `"a","b"
"c","d"
"e","f"`;

  expect(r).toEqual(e);
});

test('csv with number', () => {
  const rows = [
    ['a', 1],
    ['c', 'd'],
    ['e', 'f']
  ];

  const r = Csv.to(rows);

  const e = `"a",1
"c","d"
"e","f"`;

  expect(r).toEqual(e);
});