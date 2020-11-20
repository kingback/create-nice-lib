import minus from '../src/minus';

test('minus: 3 - 2 = 1',() => {
  expect(minus(3, 2)).toBe(1);
});

test('minus: 3 - 2 - 1 = 0',() => {
  expect(minus(3, 2, 1)).toBe(0);
});

test('minus: ',() => {
  expect(minus()).toBe(0);
});