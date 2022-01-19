import Calculator from './Calculator';

jest.mock('./Calculator');

it('should return 5', function () {
  const calculator = Calculator();
  const result = calculator.add(2,3);
  expect(result).toBe(5);
});
