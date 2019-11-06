import * as T from './tabular-xlsx';

test('get merged', () => {
  const v1 = {};
  const v2 = {merged: {h: 3, v: 7}};

  expect(T.getMerged(v1)).toEqual(false);
  expect(T.getMerged(v2)).toEqual({h: 3, v: 7});
});

test('is link', () => {
  expect(T.isLink('https://google.com')).toEqual(true);
  expect(T.isLink('hps://google.com')).toEqual(false);
});

test('isObjectAndNotArray', () => {
  const c1 = [];
  const c2 = {};
  expect(T.isObjectAndNotArray(c1)).toEqual(false);
  expect(T.isObjectAndNotArray(c2)).toEqual(true);
})