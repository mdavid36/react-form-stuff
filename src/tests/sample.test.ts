import addOne from '../utils/addOne';

test('adds three when number is 3', () => {
  expect(addOne(3)).toEqual(6);
});

test('Adds one', () => {
  expect(addOne(5)).toEqual(6);
});
