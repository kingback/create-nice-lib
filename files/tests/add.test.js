import add from '../src/add';

test('add: 1 + 2 = 3',() => {
  expect(add(1, 2)).toBe(3);
});

test('add: 1 + 2 + 3 + 4 = 10', () => {
  expect(add(1, 2, 3, 4)).toBe(10);
});

test('add: 1 + null = 1', () => {
  expect(add(1, null)).toBe(1);
});

test('add: 1 + "2" = 3', () => {
  expect(add(1, "2")).toBe(3);
});

test('add: undefined', () => {
  expect(add()).toBe(0);
});